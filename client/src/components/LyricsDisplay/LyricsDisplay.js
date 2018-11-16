import React from 'react';
import RatingStars from '../RatingStars/RatingStars.js';
import './LyricsDisplay.css';

const LyricsDisplay = (props) => {
    return (
        <div className="lyrics">
            <RatingStars />
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