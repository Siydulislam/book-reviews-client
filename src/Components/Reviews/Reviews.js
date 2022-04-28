import React from 'react';
import useReviews from '../../hooks/useReviews';
import Review from './Review';
import './reviews.css';

const Reviews = () => {
    const [reviews] = useReviews();

    return (
        <>
            <h3 className="reviews-title">What our customer says!</h3>
            <div className="reviews-container">
                {
                    reviews.map(review => <Review
                        key={review.id}
                        review={review}
                    ></Review>)
                }
            </div>
        </>
    );
};

export default Reviews;