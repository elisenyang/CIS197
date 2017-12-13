const path = require('path');
const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;
var fetch = require('isomorphic-fetch')

app.use(express.static(path.join(__dirname, 'public')));

app.get('/', (request, response) => {
    response.sendFile(__dirname + '/public/index.html'); // For React/Redux
});

//get authorization token needed to access all spotify api routes
app.get('/getToken', function(req, res) {
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
        console.log(info)
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


app.listen(PORT, error => {
    error
    ? console.error(error)
    : console.info(`==> 🌎 Listening on port ${PORT}. Visit http://localhost:${PORT}/ in your browser.`);
});
