import React, { Component } from 'react';
import './SongSearchBox.css';

class SongSearchBox extends Component {
    onChange = (e) => {
        console.log(e.target.value)
        this.props.handleChange(this.props.field, e.target.value)
    }
    render() {
        return (
            <div className={`form-group col-12 col-md-${this.props.colSize}`}><label>{this.props.label}</label>
                <input className="form-control form-control-lg"
                    onChange={this.onChange}/>
            </div>
            )
    }
}

export default SongSearchBox;