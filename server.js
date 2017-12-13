const path = require('path');
const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;
var fetch = require('isomorphic-fetch')

var querystring = require('querystring');
var cookieParser = require('cookie-parser');

var client_id = process.env.SPOTIFY_CLIENT_ID; // Your client id
var client_secret = process.env.SPOTIFY_CLIENT_SECRET; // Your secret
var redirect_uri = 'http://localhost:3000/'; // Your redirect uri

// app.use(express.static(path.join(__dirname, 'public')));


app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
 });

 app.get('/', (request, response) => {
    response.sendFile(__dirname + '/public/index.html');
});

//get authorization token needed to access all spotify api routes
app.get('/token', function(req, res) {
    var payload = process.env.SPOTIFY_CLIENT_ID + ":" + process.env.SPOTIFY_CLIENT_SECRET;
    var encodedPayload = new Buffer(payload).toString("base64");
    fetch('https://accounts.spotify.com/api/token', {
        method: 'POST',
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
          "Authorization": "Basic " + encodedPayload
        },
        body: "grant_type=client_credentials"
      }).then(response => {
        return response.json()
      }).then(resp => {
        res.json({token: resp.access_token})
      }).catch(err => {
        console.log(err.message)
      })
})

app.get('/userToken/:code', function(req,res) {
    var payload = process.env.SPOTIFY_CLIENT_ID + ":" + process.env.SPOTIFY_CLIENT_SECRET;
    var encodedPayload = new Buffer(payload).toString("base64");
    fetch('https://accounts.spotify.com/api/token?' + querystring.stringify({
        grant_type: "authorization_code",
        code: req.params.code,
        redirect_uri: redirect_uri
      }), {
        method: 'POST',
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
          "Authorization": "Basic " + encodedPayload
        }
      }).then(response => {
        return response.json()
      }).then(resp => {
        res.json({token: resp["access_token"]})
      }).catch(err => {
        console.log(err.message)
      })
})

app.get('/playlist/:token/:user/:playlistId', function (req, res) {
    //object where all info obtained will be stored
    var info = {}
    //get playlist info and ids of all tracks in playlist
    fetch("https://api.spotify.com/v1/users/"+req.params.user+"/playlists/"+req.params.playlistId, {
        method: 'GET',
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
          "Authorization": "Bearer " + req.params.token
        }
    }).then(response => {
        return response.json()
    }).then(responseJSON => {
        info.length = responseJSON.tracks.total
        info.trackIds = []
        info.name = responseJSON.name
        info.description = responseJSON.description
        info.image = responseJSON.images[0].url
        responseJSON.tracks.items.forEach(item => {
            info.trackIds.push(item.track.id)
        })
        return;
    }).then(() => {
        //get audio feature of each track in playlist
        //this api route allows getting info for multiple tracks at once if
        //they are all in one string separated by commas
        var idString = info.trackIds.join(',')
        fetch("https://api.spotify.com/v1/audio-features?ids="+idString, {
            method: 'GET',
            headers: {
              "Content-Type": "application/x-www-form-urlencoded",
              "Authorization": "Bearer " + req.params.token
            }
          }).then(response => {
            return response.json()
          }).then(responseJSON => {
              //getting averages of all audio features and saving to info object
              var stats = {}
              responseJSON.audio_features.forEach(track => {
                for (var prop in track) {
                    if (!stats[prop]) {
                        stats[prop] = track[prop]
                    } else {
                        stats[prop] += track[prop]
                    }
                }
              })
              for (var prop in stats) {
                  stats[prop] = stats[prop]/info.length
              }
              info.stats = stats
              res.json({data: info})
          })
    })
})


app.get('/track/:token/:trackId', function(req, res) {
    let info = {}
    fetch("https://api.spotify.com/v1/tracks/"+req.params.trackId, {
        method: 'GET',
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
          "Authorization": "Bearer " + req.params.token
        }
    }).then(response => {
        return response.json()
    }).then(responseJSON => {
        info.name = responseJSON.name
        info.artists = []
        responseJSON.artists.forEach(artist => {
            info.artists.push(artist.name)
        })
        info.album = responseJSON.album.name
        info.image = responseJSON.album.images[0].url
        return;
    }).then(() => {
        fetch("https://api.spotify.com/v1/audio-features/"+req.params.trackId, {
            method: 'GET',
            headers: {
              "Content-Type": "application/x-www-form-urlencoded",
              "Authorization": "Bearer " + req.params.token
            }
        }).then(response => {
            return response.json()
        }).then(responseJSON => {
            info.stats = responseJSON
            return;
        }).then(() => {
            res.json({data: info})
        }).catch(err => {
            console.log(err.message)
        })
    }).catch(err => {
        console.log(err.message)
    })  
})



var generateRandomString = function(length) {
    var text = '';
    var possible = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  
    for (var i = 0; i < length; i++) {
      text += possible.charAt(Math.floor(Math.random() * possible.length));
    }
    return text;
  };
  
  var stateKey = 'spotify_auth_state';



app.use(cookieParser());



app.get('/login', function(req, res) {

  var state = generateRandomString(16);
  res.cookie(stateKey, state);

  // your application requests authorization
  var scope = 'user-read-private user-library-modify playlist-modify-public playlist-modify-private';

    var url = 'https://accounts.spotify.com/authorize?' +
        querystring.stringify({
          response_type: 'code',
          client_id: client_id,
          scope: scope,
          redirect_uri: redirect_uri,
          state: state
        })

    res.json({url: url})
});


app.get('/follow/:token/:user/:playlistID', function(req, res) {
    fetch("https://api.spotify.com/v1/users/"+req.params.user+"/playlists/"+req.params.playlistID+"/followers/", {
        method: 'PUT',
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
          "Authorization": "Bearer " + req.params.token
        }
    }).then(response => {
        if (response.status === 200) {
            res.json({status: 200})
        } else {
            res.json({status: 500})
        }
        return;
    }).catch(err => {
        console.log(err.message)
    })
})

app.get('/addToLibrary/:token/:trackID', function(req, res) {
    fetch("https://api.spotify.com/v1/me/tracks?ids="+req.params.trackID, {
        method: 'PUT',
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
          "Authorization": "Bearer " + req.params.token
        }
    }).then(response => {
        if (response.status === 200) {
            res.json({status: 200})
        } else {
            res.json({status: 500})
        }
        return;
    }).catch(err => {
        console.log(err.message)
    })
})




app.listen(PORT, error => {
    error
    ? console.error(error)
    : console.info(`Listening on port ${PORT}. Visit http://localhost:${PORT}/ in your browser.`);
});
