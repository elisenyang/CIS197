import React from 'react';
import { render } from 'react-dom';
import Analysis from './Analysis'


class Track extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      token: this.props.token,
      trackURI: '',
      data: {},
      analyzed: false
    }
  }

  handleAnalyze() {
    // extract id from uri
    let trackArr = this.state.trackURI.split(':')
    let trackID = trackArr[trackArr.length - 1]
    fetch('/track/' + this.state.token + '/' + trackID, {
      method: 'GET'
    }).then(response => {
      return response.json()
    }).then(responseJSON => {
      this.setState({data: responseJSON.data, analyzed: true})
    }).catch(err => {
      console.log(err.message)
    })
  }

  renderAnalysis() {
    let trackArr = this.state.trackURI.split(':')
    let trackID = trackArr[trackArr.length - 1]
    if (this.state.analyzed) {
      return (<Analysis data={this.state.data} type={'track'} token={this.props.token} login={this.props.login} trackID={trackID}/>)
    }
  }


  render() {
    return (
      <div style={styles.container} className="container">
        <div>
          <input type="text" style={styles.inputBar} className="trackURIInput" placeholder="Input Track URI.." onChange={(e) => {this.setState({trackURI: e.target.value})}}/>
          <button style={styles.button} onClick={() => this.handleAnalyze()}>Go</button>
        </div>
        {this.renderAnalysis()}
      </div>
    )
  }
}

const styles = {
  inputBar: {
    position: 'relative',
    fontFamily: 'Raleway, sans-serif',
    width: '240px',
    backgroundColor: 'rgba(255,255,255,0.5)',
    height: '35px',
    border: '0px',
    borderRadius: '20px',
    marginTop: '10px',
    paddingLeft: '8px',
    fontSize: '14px',
  },
  button: {
    position: 'relative',
    fontFamily: 'Raleway, sans-serif',
    borderRadius: '50%',
    border: '0px',
    backgroundColor: 'rgba(255,255,255,0.4)',
    height: '35px',
    width: '35px',
    marginLeft: '2px',
    boxShadow: '2px 3px rgba(0,0,0,0.4)'
  },
  container: {
    width: '100vw',
    position: 'relative',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center'
  }
}

export default Track;