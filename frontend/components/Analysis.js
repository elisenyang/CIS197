import React from 'react';
import { render } from 'react-dom';

class Analysis extends React.Component {
  constructor(props) {
    super(props)
  }

  renderInfo() {
    if (this.props.type === "playlist") {
      return (
        <div>
        <h3 style={styles.name}>{this.props.data.name}</h3>
        <p style={styles.description}>{this.props.data.description}</p>
        <img src={this.props.data.image}/>
        <p>{'Number of Tracks: '+this.props.data.length}</p>
        </div>
      )
    }

    if (this.props.type === "track") {
      return (
        <div>
        <h4>{this.props.data.name}</h4>
        <h5>{this.props.data.artists.join(', ')}</h5>
        <p>{'From: '+this.props.data.album}</p>
        <img src={this.props.data.image}/>
        </div>
      )
    }
  }

  render() {
    return (
      <div>
        {this.renderInfo()}
        <p>{'Acousticness: '+this.props.data.stats.acousticness}</p>
        <p>{'Danceability: '+this.props.data.stats.danceability}</p>
        <p>{'Energy: '+this.props.data.stats.energy}</p>
        <p>{'Instrumentalness: '+this.props.data.stats.instrumentalness}</p>
        <p>{'Key: '+this.props.data.stats.key}</p>
        <p>{'Liveness: '+this.props.data.stats.liveness}</p>
        <p>{'Loudness: '+this.props.data.stats.loudness}</p>
        <p>{'Speechiness: '+this.props.data.stats.speechiness}</p>
        <p>{'Tempo: '+this.props.data.stats.tempo}</p>
      </div>
    )
  }
}

const styles = {
  name: {
    marginTop: '15px',
    marginBottom: '2px'
  },
  description: {
    margin: '0px',
    fontSize: '16px'
  }
}

export default Analysis;