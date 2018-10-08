import React, { Component } from 'react';
import SongSearchBox from '../SongSearchBox/SongSearchBox.js';
import SongSearchButton from '../SongSearchButton/SongSearchButton.js';
import LyricsDisplay from '../LyricsDisplay/LyricsDisplay.js';
import songsApi from '../../utils/lyric-search';

class SongSearch extends Component {
    state = {
        artist: '',
        songTitle: '',
        lyrics: '',
        loading: true,
        invalid: false
    }
    handleChange = (field, value) => {
        this.setState({
            [field]: value
        });
    }

    handleClick = () => {
        if (this.state.artist && this.state.songTitle) {
            songsApi.getSongLyrics(this.state.artist, this.state.songTitle)
                .then((lyrics) => {
                    songsApi.translateSongLyrics(lyrics).then((emojis) => {
                        this.setState({
                            lyrics: this.splitLyrics(lyrics, emojis.emojis),
                            loading: false,
                            invalid: false
                        });
                    });
                });
        } else {
            this.setState({
                invalid: true
            });
        }
    }

    splitLyrics = (lyrics, emojiLyrics) => {
        return {
            original: this.filterEmptyPhrases(lyrics.split(/(\\r\\n|\\r|\\n|\r|\n|\r\n)/)),
            translated: this.filterEmptyPhrases(emojiLyrics.split(/(\\r\\n|\\r|\\n|\r|\n|\r\n)/))}
    }

    filterEmptyPhrases = (song) => {
        return song.filter((lyric) => {
            return lyric.match(/[a-z]/i);
        });
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
                {this.state.invalid ? <p>Please make sure you have both an artist and a song title!</p> : ''}
                {this.state.loading ? <p></p> :
                    <LyricsDisplay lyrics={this.state.lyrics}/>}
            </div>
        )
    }
}

export default SongSearch;