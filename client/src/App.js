import React, { Component } from 'react';
import './App.css';
import SongSearch from './components/SongSearch/SongSearch.js';

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
        if (response.status !== 200) console.log(body.message);

        return body;
    }
    render() {
        return (
            <div className="App">
                <main className="container">
                    <h1 className="title">
                        songmoji    
                    </h1>
                    <p>search🔎 for a song🎶 and translate📚 the lyrics🎵 into emojis😄!</p>
                    <SongSearch />
                </main>        
                <footer class="footer">
                    <p> © 2018 <a href="http://www.sarakevorkian.com" target="_blank"> Sara Kevorkian</a></p>
                </footer>
            </div>
        );
    }
}

export default App;
