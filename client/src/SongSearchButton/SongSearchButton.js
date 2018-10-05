import React, { Component } from 'react';
import './SongSearchButton.css';

class SongSearchButton extends Component {

    hitEnter = (e) => {
        this.props.handleClick(e)
    }

    render() {
        return (
            <button className="btn" onClick={this.hitEnter}>search time🔎🕒! </button>
            )
    }
}

export default SongSearchButton;