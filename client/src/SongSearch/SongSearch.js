import React, { Component } from 'react';
import SongSearchBox from '../SongSearchBox/SongSearchBox.js';
import SongSearchButton from '../SongSearchButton/SongSearchButton.js';

class SongSearch extends Component {
    state = {
        artist: '',
        songTitle: ''
    }
    handleChange = (field, value) => {
        this.setState({
            [field]: value
        });
    }

    handleClick = () => {
        console.log(this.state.artist, this.state.songTitle);
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
            </div>
        )
    }
}

export default SongSearch;