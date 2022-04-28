import React from 'react';
import './reviews.css';

const Review = (props) => {
    const { name, profession, imageURL, rating, comment } = props.review;

    return (
        <div className="review-container">
            <div className="image-profile-container">
                <img src={imageURL} alt="" />
                <div className="profile-container">
                    <h6>{name}</h6>
                    <small>{profession}</small><br />
                    <small>Rating: {rating}/5</small>
                </div>
            </div>
            <p className="comment">"{comment}"</p>
        </div>
    );
};

export default Review;