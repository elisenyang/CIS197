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

app.get('/playlist/:token/:playlistId', function (req, res) {
    //object where all info obtained will be stored
    var info = {}
    //get playlist name, description, and image
    fetch("https://api.spotify.com/v1/users/spotifycharts/playlists/"+req.params.playlistId, {
        method: 'GET',
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
          "Authorization": "Bearer " + req.params.token
        }
    }).then(response => {
        return response.json()
    }).then(responseJSON => {
        console.log(responseJSON.tracks)
    })
    //get ids of all tracks in playlist
    fetch("https://api.spotify.com/v1/users/spotifycharts/playlists/"+req.params.playlistId, {
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


// app.get('/login', function(req, res) {
//     var scopes = 'user-read-private user-read-email';
//     var redirect_uri='localhost:3000/'
//     res.redirect('https://accounts.spotify.com/authorize' + 
//       '?response_type=code' +
//       '&client_id=' + process.env.SPOTIFY_CLIENT_ID+
//       (scopes ? '&scope=' + encodeURIComponent(scopes) : '') +
//       '&redirect_uri=' + encodeURIComponent(redirect_uri));
//     });


app.listen(PORT, error => {
    error
    ? console.error(error)
    : console.info(`==> 🌎 Listening on port ${PORT}. Visit http://localhost:${PORT}/ in your browser.`);
});
