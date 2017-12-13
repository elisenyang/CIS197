import React from 'react';
import { render } from 'react-dom';
import Analysis from './components/Analysis'
import Playlist from './components/Playlist'
import Track from './components/Track'


class App extends React.Component {
    constructor() {
        super()

        this.state = {
            token: '',
            playlistURI: '',
            data: {},
            analyzed: false,
            playlist: false,
            track: false
        }
    }

    componentDidMount() {
    //get authorization token needed to access all spotify data
    //save client-side
        fetch('/getToken', {
            method: 'GET'
        }).then(response => {
            return response.json()
        }).then(responseJSON => {
            console.log('HI', responseJSON)
            this.setState({
                token: responseJSON.token
            })
        }).catch(err => {
            console.log(err.message)
        })
    }

    handlePlaylistClick() {
        this.setState({
            playlist: true,
            track: false
        })
    }

    renderPlaylist() {
        if (this.state.playlist) {
            return(<Playlist token={this.state.token}/>)
        }
    }

    handleTrackClick() {
        this.setState({
            track: true,
            playlist: false
        })
    }

    renderTrack() {
        if (this.state.track) {
            return(<Track token={this.state.token}/>)
        }
    }


    render() {
        return(
            <div className="appContainer" style={styles.appContainer}>
                    <h2>SPOTIFY AUDIO FEATURE ANALYZER</h2>
                    <div className="nav" styles={styles.nav}>
                        <button style={styles.button} onClick={() => this.handlePlaylistClick()}>Playlist</button>
                        <button style={styles.button} onClick={() => this.handleTrackClick()}>Track</button>
                    </div>
                {this.renderPlaylist()}
                {this.renderTrack()}
            </div>
        )
    }
}

const styles = {
    appContainer: {
        fontFamily: 'Raleway, bold, sans-serif',
        fontSize: '24px',
        height: '100vh',
        width: '100vw',
        position: 'absolute',
        top: '0px',
        left: '0px',
        margin: '0',
        background: '-webkit-linear-gradient(#ffbfd2, #fff7cc)',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        overflow: 'scroll'
    },
    nav: {
        position: 'relative',
        height: '100px',
        display: 'flex',
        justifyContent: 'space-around'
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


render(
    <App />,document.getElementById('root')
);


