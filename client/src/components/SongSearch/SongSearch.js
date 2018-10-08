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
        loading: true

    }
    handleChange = (field, value) => {
        this.setState({
            [field]: value
        });
    }

    handleClick = () => {
        
        songsApi.getSongLyrics(this.state.artist, this.state.songTitle)
            .then((lyrics) => {
                songsApi.translateSongLyrics(lyrics).then((emojis) => {
                    this.setState({
                        lyrics: this.splitLyrics(lyrics, emojis.emojis),
                        loading: false
                    });
                console.log('test'); // maybe set state here
                });
            });
                   
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
                <div className="lyrics">
                    {this.state.loading ? <p></p> 
                        : this.state.lyrics.translated.map((lyric, i) => {
                            return <p className="lyric" key={i}><span className="translated">{lyric}</span> <span className="original">{this.state.lyrics.original[i]}</span></p>
                    })}

                </div>
            </div>
        )
    }
}

export default SongSearch;