import React, { Component } from 'react';
import './App.css';
import SongSearch from './SongSearch/SongSearch.js';

class App extends Component {
    state = {
        response: ''
    };
    componentDidMount() {
        this.callApi()
            .then(res => this.setState({ response: res.express }))
            .catch(err => console.error(err));
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
                <h1 className="title">
                    songmoji    
                </h1>
                <p>search🔎 for a song🎶 and translate📚 the lyrics🎵 into emojis😄!</p>
                <SongSearch />
                        
                {/*<p className="App-intro">{this.state.response}</p>*/}
            </div>
        );
    }
}

export default App;
