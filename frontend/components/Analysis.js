import React from 'react';
import { render } from 'react-dom';

class Analysis extends React.Component {
  constructor(props) {
    super(props)
  }

  renderInfo() {
    if (this.props.type === "playlist") {
      return (
        <div style={styles.top}>
          <img style={styles.image} src={this.props.data.image}/>
          <div>
            <h3 style={styles.name}>{this.props.data.name}</h3>
            <p style={styles.description}>{this.props.data.description}</p>
            <p style={styles.description}>{'Number of Tracks: '+this.props.data.length}</p>
            <button style={styles.button} onClick={() => this.follow()}>Follow</button>
          </div>
        </div>
      )
    }

    if (this.props.type === "track") {
      return (
        <div style={styles.top}>
          <img style={styles.image} src={this.props.data.image}/>
          <div>
          <h3 style={styles.name}>{this.props.data.name}</h3>
          <p style={styles.description}>{this.props.data.artists.join(', ')}</p>
          <p style={styles.description}>{this.props.data.album}</p>
          <button style={styles.button} onClick={() => this.addToLibrary()}>Add to Library</button>
          </div>
        </div>
      )
    }
  }

  follow() {
    if (this.props.login) {
        fetch('/follow/'+this.props.token+'/'+this.props.user+'/'+this.props.playlistID, {
            method: 'GET'
        }).then(response => {
            return response.json()
        }).then(responseJSON => {
            if (responseJSON.status === 200) {
                window.alert("Playlist has been followed")
            } else {
                window.alert("There was an error followng this playlist. Please try again")
            }
        }).catch(err => {
            console.log(err.message)
        }) 
    } else {
        alert("Please login with Spotify to follow this playlist.")
    } 
  }

  addToLibrary() {
    if (this.props.login) {
      fetch('/addToLibrary/'+this.props.token+'/'+this.props.trackID, {
        method: 'GET'
      }).then(response => {
        return response.json()
      }).then(responseJSON => {
        if (responseJSON.status === 200) {
          window.alert("Track has been added to your library")
        } else {
          window.alert("There was an error. Please try again.")
        }
      })
    } else {
      window.alert("Pleae login with Spotify to add this track to your library.")
    }
  }

  render() {
    return (
      <div style={styles.container2}>
        {this.renderInfo()}
        <div style={styles.container3}>
          <div style={styles.item}>
            <p style={styles.paragraph}>
              <span style={styles.props}>Danceability: </span>
              <span style={styles.vals}>{String(this.props.data.stats.danceability).substring(0,5)}</span>
            </p>
            <p style={styles.definition}>
              Danceability describes how suitable a track is for dancing based on a combination of musical elements including tempo, rhythm stability, beat strength, and overall regularity. A value of 0.0 is least danceable and 1.0 is most danceable.
            </p>
            <input type="range" min="0" max="100" value={String(this.props.data.stats.danceability*100)} style={styles.slider}/>
          </div>
          <div style={styles.item}>
            <p style={styles.paragraph}>
              <span style={styles.props}>Loudness: </span>
              <span style={styles.vals}>{String(this.props.data.stats.loudness).substring(0,5)}</span>
            </p>
            <p style={styles.definition}>
              The overall loudness of a track in decibels (dB). Loudness values are averaged across the entire track and are useful for comparing relative loudness of tracks. Loudness is the quality of a sound that is the primary psychological correlate of physical strength (amplitude). Values typical range between -60 and 0 db.
            </p>
            <input type="range" min="-60" max="0" value={String(this.props.data.stats.loudness)} style={styles.slider}/>
          </div>
          <div style={styles.item}>
            <p style={styles.paragraph}>
              <span style={styles.props}>Energy: </span>
              <span style={styles.vals}>{String(this.props.data.stats.energy).substring(0,5)}</span>
            </p>
            <p style={styles.definition}>
              Energy is a measure from 0.0 to 1.0 and represents a perceptual measure of intensity and activity. Typically, energetic tracks feel fast, loud, and noisy. For example, death metal has high energy, while a Bach prelude scores low on the scale. Perceptual features contributing to this attribute include dynamic range, perceived loudness, timbre, onset rate, and general entropy.
            </p>
            <input type="range" min="0" max="100" value={String(this.props.data.stats.energy*100)} style={styles.slider}/>
          </div>
          <div style={styles.item}>
            <p style={styles.paragraph}>
              <span style={styles.props}>Instrumentalness: </span>
              <span>{String(this.props.data.stats.instrumentalness).substring(0,5)}</span>
            </p>
            <p style={styles.definition}>
              Predicts whether a track contains no vocals. "Ooh" and "aah" sounds are treated as instrumental in this context. Rap or spoken word tracks are clearly "vocal". The closer the instrumentalness value is to 1.0, the greater likelihood the track contains no vocal content. Values above 0.5 are intended to represent instrumental tracks, but confidence is higher as the value approaches 1.0.
            </p>
            <input type="range" min="0" max="100" value={String(this.props.data.stats.instrumentalness*100)} style={styles.slider}/>
          </div>
          <div style={styles.item}>
            <p style={styles.paragraph}>
              <span style={styles.props}>Acousticness: </span>
              <span style={styles.vals}>{String(this.props.data.stats.acousticness).substring(0,5)}</span>
            </p>
            <p style={styles.definition}>
              A confidence measure from 0.0 to 1.0 of whether the track is acoustic. 1.0 represents high confidence the track is acoustic.
            </p>
            <input type="range" min="0" max="100" value={String(this.props.data.stats.acousticness*100)} style={styles.slider}/>
          </div>
          <div style={styles.item}>
            <p style={styles.paragraph}>
              <span style={styles.props}>Liveness: </span>
              <span style={styles.vals}>{String(this.props.data.stats.liveness).substring(0,5)}</span>
            </p>
            <p style={styles.definition}>
            Detects the presence of an audience in the recording. Higher liveness values represent an increased probability that the track was performed live. A value above 0.8 provides strong likelihood that the track is live.
            </p>
            <input type="range" min="0" max="100" value={String(this.props.data.stats.liveness*100)} style={styles.slider}/>
          </div>
          <div style={styles.item}>
            <p style={styles.paragraph}>
              <span style={styles.props}>Speechiness: </span>
              <span style={styles.vals}>{String(this.props.data.stats.speechiness).substring(0,5)}</span>
            </p>
            <p style={styles.definition}>
              Speechiness detects the presence of spoken words in a track. The more exclusively speech-like the recording (e.g. talk show, audio book, poetry), the closer to 1.0 the attribute value. Values above 0.66 describe tracks that are probably made entirely of spoken words. Values between 0.33 and 0.66 describe tracks that may contain both music and speech, either in sections or layered, including such cases as rap music. Values below 0.33 most likely represent music and other non-speech-like tracks.
            </p>
            <input type="range" min="0" max="100" value={String(this.props.data.stats.speechiness*100)} style={styles.slider}/>
          </div>
          <div style={styles.item}>
            <p style={styles.paragraph}>
              <span style={styles.props}>Key: </span>
              <span style={styles.vals}>{String(this.props.data.stats.key).substring(0,5)}</span>
            </p>
            <p style={styles.definition}>
              The key the track is in. Integers map to pitches using standard Pitch Class notation. E.g. 0 = C, 1 = C♯/D♭, 2 = D, and so on.
            </p>
            <p style={styles.paragraph}>
              <span style={styles.props}>Tempo: </span>
              <span style={styles.vals}>{String(this.props.data.stats.tempo).substring(0,5)+ ' BPM'}</span>
            </p>
            <p style={styles.definition}>
              The overall estimated tempo of a track in beats per minute (BPM). In musical terminology, tempo is the speed or pace of a given piece and derives directly from the average beat duration.
            </p>
          </div>
        </div>
      </div>
    )
  }
}

const styles = {
  name: {
    marginTop: '0px',
    marginBottom: '2px',
    paddingLeft: '5px'
  },
  description: {
    margin: '3px',
    fontSize: '18px',
    width: '200px',
    paddingLeft: '2px'
  },
  image: {
    height: '200px',
    width: '200px'
  },
  top: {
    width: '800px',
    marginTop: '20px',
    display: 'flex',
    paddingLeft: '125px',
    paddingRight: '125px',
    justifyContent: 'space-between',
    paddingBottom: '20px',
    borderBottom: '1px black solid'
  },
  container2: {
    width: '700px',
    display: 'flex',
    flexDirection: 'row',
    flexWrap:'wrap',
    marginBottom: '30px'
  },
  slider: {
    width: '300px'
  },
  props: {
    fontFamily: 'Raleway, bold, sans-serif',
    fontSize: '20px',
    fontWeight: '600',
    margin: '0px'
  },
  vals: {
    fontSize: '20px',
    margin: '0px'
  },
  definition: {
    fontSize: '14px',
    marginTop: '2px',
    marginBottom: '2px'
  },
  paragraph: {
    margin: '2px'
  },
  item: {
    width: '300px',
    paddingLeft: '25px',
    paddingRight: '25px',
    paddingTop: '10px',
    paddingBottom: '10px'
  },
  container3: {
    display:'flex',
    flexWrap: 'wrap'
  },
  button: {
    fontFamily: 'Raleway, sans-serif',
    color: 'black',
    height: '40px',
    width: '150px',
    backgroundColor: 'rgba(255,255,255,0.4)',
    fontSize: '16px',
    margin: '8px',
    border: '0px',
    borderRadius: '20px',
    boxShadow: '2px 3px rgba(0,0,0,0.4)'
  }
}

export default Analysis;