import React from 'react';
import './LyricsDisplay.css';

const LyricsDisplay = (props) => {
    return (
        <div className="lyrics">
            {props.lyrics.translated.map((lyric, i) => {
                return <div className="lyric" key={i}>
                    <p className="translated">{lyric}</p>
                    <span className="original">{props.lyrics.original[i]}</span>
                </div>
            })}
        </div>
    )
}

export default LyricsDisplay;