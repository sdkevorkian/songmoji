import React, { Component } from 'react';
import './SongSearchBox.css';

class SongSearchBox extends Component {
    onChange = (e) => {
        this.props.handleChange(this.props.field, e.target.value)
    }
    hitEnter = (e) => {
        if (e.which === 13) {
            this.props.onHitEnter();
        }        
    }
    render() {
        var invalidClass = this.props.isInvalid ? " invalid" : "";
        return (
            <div className={`form-group col-12 col-md-${this.props.colSize}`}><label>{this.props.label}</label>
                <input className={"form-control form-control-lg" + invalidClass}
                    onChange={this.onChange}
                    onKeyPress={this.hitEnter}
                />
            </div>
            )
    }
}

export default SongSearchBox;