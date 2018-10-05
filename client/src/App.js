import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import SongSearchBoxes from './SongSearchBoxes/SongSearchBoxes.js';

class App extends Component {
    state = {
        response: ''
    };
    componentDidMount() {
        this.callApi()
            .then(res => this.setState({ response: res.express }))
            .catch(err => console.err(err));
    }
    callApi = async () => {
        const response = await fetch('/api/hello');
        const body = await response.json();
        if (response.status !== 200) throw Error(body.message);

        return body;
    }
    render() {
        return (
            <div className="App container">
            <h1 class="title">
                songmoji    
            </h1>
            <p>search🔎 for a song🎶 and translate📚 the lyrics🎵 into emojis😄!</p>
            <SongSearchBoxes/>
            {/*<p className="App-intro">{this.state.response}</p>*/}
            </div>
        );
    }
}

export default App;
