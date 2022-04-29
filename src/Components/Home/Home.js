import React from 'react';
import './Home.css';
import coverPhoto from '../../Assets/Images/the-seven-habits-of-highly-effective-people-1.jpg';
import useReviews from '../../hooks/useReviews';
import Review from '../Reviews/Review';
import { Link } from 'react-router-dom';

const Home = () => {
    const [reviews] = useReviews();
    const first3Review = reviews.slice(0, 3);

    return (
        <>
            <div className="section-container">
                <div>
                    <h2>The Seven Habits of Highly Effective People</h2>
                    <p>First published in 1989, is a business and self-help book written by Stephen R. Covey. Covey presents an approach to being effective in attaining goals by aligning oneself to what he calls "true north" principles based on a character ethic that he presents as universal and timeless.</p>
                </div>
                <img src={coverPhoto} alt="" />
            </div>
            <div>
                <h3 className="reviews-title">Customer Reviews</h3>
                <div className="reviews-container">
                    {
                        first3Review.map(review => <Review
                            key={review.id}
                            review={review}
                        ></Review>)
                    }
                </div>
                <Link to="/reviews" className="see-all-reviews">See All Reviews</Link>
            </div>
        </>
    );
};

export default Home;