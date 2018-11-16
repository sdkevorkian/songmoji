import React, { Component } from "react";
import Star from './Star';
import './RatingStars.css';

class RatingStars extends Component {
    state = {
        rating: 0
    }
    updateRating = (rank) => {
        console.log(rank);
        this.setState({
            rating: rank
        });
    }

    render() {
        return (
            <div className="stars">
                <p className="rating-title">Rate this translation: </p>
                <div className="rating">                    
                    <Star isActive={this.state.rating === "5"}
                        onClick={this.updateRating} rank="5" />
                    <Star isActive={this.state.rating === "4"}
                        onClick={this.updateRating} rank="4" />
                    <Star isActive={this.state.rating === "3"}
                        onClick={this.updateRating} rank="3" />
                    <Star isActive={this.state.rating === "2"}
                        onClick={this.updateRating} rank="2" />
                    <Star isActive={this.state.rating === "1"}
                        onClick={this.updateRating} rank="1" />
                </div>
            </div>    
        )
    }
}

export default RatingStars;