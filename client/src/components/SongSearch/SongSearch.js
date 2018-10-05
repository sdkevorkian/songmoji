import React, { Component } from 'react';
import SongSearchBox from '../SongSearchBox/SongSearchBox.js';
import SongSearchButton from '../SongSearchButton/SongSearchButton.js';
import songsApi from '../../utils/lyric-search';

class SongSearch extends Component {
    state = {
        artist: '',
        songTitle: '',
        lyrics: ''

    }
    handleChange = (field, value) => {
        this.setState({
            [field]: value
        });
    }

    handleClick = () => {
        songsApi.getSongLyrics(this.state.artist, this.state.songTitle)
            .then((lyrics) => {
                this.setState({
                    lyrics: lyrics
                });
            });
    }
    render() {
        return (
            <div className="row song-search">
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
                {this.state.lyrics}
            </div>
        )
    }
}

export default SongSearch;