import React from 'react';
import { render } from 'react-dom';
import Analysis from './Analysis'


class Playlist extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            token: this.props.token,
            playlistURI: '',
            data: {},
            analyzed: false
        }
    }

    handleAnalyze() {
        let playlistArr = this.state.playlistURI.split(':')
        let playlistID = playlistArr[playlistArr.length -1]
        let user = playlistArr[2]
        console.log(user)
        fetch('/playlist/'+this.state.token+'/'+user+'/'+playlistID, {
            method: 'GET'
        }).then(response => {
            return response.json()
        }).then(responseJSON => {
            console.log(responseJSON.data)
            this.setState({data: responseJSON.data, analyzed: true})
        }).catch(err => {
            console.log(err.message)
        })
    }

    renderAnalysis() {
        if (this.state.analyzed) {
            return (<Analysis data={this.state.data} type={"playlist"}/>)
        }
    }


    render() {
        return(
            <div style={styles.container} className="container">
                <div>
                    <input type="text" style={styles.inputBar} className="playlistURIInput" placeholder="Input Playlist URI.." onChange={(e) => {this.setState({playlistURI: e.target.value})}}/>
                    <button style={styles.button} onClick={() => this.handleAnalyze()}>Go</button>
                </div>
                {this.renderAnalysis()}
            </div>
        )
    }
}

const styles = {
  inputBar: {
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
    fontFamily: 'Raleway, sans-serif',
    borderRadius: '50%',
    border: '0px',
    backgroundColor: 'rgba(255,255,255,0.4)',
    height: '35px',
    width: '35px',
    marginLeft: '2px'
  },
  container: {
    width: '100vw',
    position: 'relative',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center'
  }
}

export default Playlist;