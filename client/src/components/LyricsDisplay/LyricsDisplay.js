import React from 'react';
import './LyricsDisplay.css';

const LyricsDisplay = (props) => {
    return (
        <div className="lyrics">
            {props.lyrics.translated.map((lyric, i) => {
                return <p className="lyric" key={i}>
                    <span className="translated">{lyric}</span>
                    <span className="original">{props.lyrics.original[i]}</span>
                </p>
            })}
        </div>
    )
}

export default LyricsDisplay;