import React from 'react';
import { render } from 'react-dom';

class Analysis extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div>
        <h4>{this.props.data.name} : {this.props.data.description}</h4>
        <img src={this.props.data.image}/>
        <p>{'Number of Tracks: '+this.props.data.length}</p>
        <p>{'Acousticness: '+this.props.data.stats.acousticness}</p>
        <p>{'Danceability: '+this.props.data.stats.danceability}</p>
        <p>{'Energy: '+this.props.data.stats.energy}</p>
        <p>{'Instrumentalness: '+this.props.data.stats.instrumentalness}</p>
        <p>{'Key: '+this.props.data.stats.key}</p>
        <p>{'Liveness: '+this.props.data.stats.liveness}</p>
        <p>{'Loudness: '+this.props.data.stats.loudness}</p>
        <p>{'Speechiness: '+this.props.data.stats.speechiness}</p>
        <p>{'Average Tempo: '+this.props.data.stats.tempo}</p>
      </div>
    )
  }
}

export default Analysis;