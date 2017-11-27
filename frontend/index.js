import React from 'react';
import { render } from 'react-dom';
import Analysis from './components/Analysis'


class App extends React.Component {
    constructor() {
        super()

        this.state = {
            token: '',
            playlistId: '',
            data: {},
            analyzed: false
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
            this.setState({
                token: responseJSON.token
            })
        }).catch(err => {
            console.log(err.message)
        })
    }

    handleAnalyze() {
        fetch('/playlist/'+this.state.token+'/'+this.state.playlistId, {
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
            return (<Analysis data={this.state.data}/>)
        }
    }


    render() {
        return(
            <div>
                <div>
                    <h3>Input Playlist ID</h3>
                    <input type="text" className="playlistIdInput" placeholder="Playlist ID.." onChange={(e) => {this.setState({playlistId: e.target.value})}}/>
                    <button onClick={() => this.handleAnalyze()}>Analyze Your Playlist</button>
                </div>
                {this.renderAnalysis()}
            </div>
        )
    }
}

render(
    <App />,document.getElementById('root')
);
