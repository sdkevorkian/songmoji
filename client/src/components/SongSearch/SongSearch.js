import React, { Component } from 'react';
import SongSearchBox from '../SongSearchBox/SongSearchBox.js';
import SongSearchButton from '../SongSearchButton/SongSearchButton.js';
import songsApi from '../../utils/lyric-search';
import './SongSearch.css';

class SongSearch extends Component {
    state = {
        artist: '',
        songTitle: '',
        lyrics: '',
        translatedLyrics: ''

    }
    handleChange = (field, value) => {
        this.setState({
            [field]: value
        });
    }

    handleClick = () => {
        
        songsApi.getSongLyrics(this.state.artist, this.state.songTitle)
            .then((lyrics) => {
                console.log(this.splitLyrics(lyrics));

                this.setState({
                    lyrics: lyrics
                });
                songsApi.translateSongLyrics(lyrics).then((emojis) => {
                    this.setState({
                        translatedLyrics: emojis.emojis
                    });
                });
            });
                   
    }

    splitLyrics = (lyrics) => {
        console.log(lyrics);
        return lyrics.split(/(\\r\\n|\\r|\\n|\r|\n|\r\n)/); // add filter to remove whitespace only entries
    }
    render() {
        return (
            <div className="song-search">
                <div className="row">
                <SongSearchBox
                    label="artist"
                    field="artist"
                    colSize="6"
                    handleChange={this.handleChange}
                />
                <SongSearchBox
                    label="song title"
                    field="songTitle"
                    colSize="6"
                    handleChange={this.handleChange}
                />
                <SongSearchButton
                    handleClick={this.handleClick}
                />
            </div>
                <div className="lyrics">
                    {this.state.translatedLyrics}
                    {this.state.lyrics}
                </div>
            </div>
        )
    }
}

export default SongSearch;