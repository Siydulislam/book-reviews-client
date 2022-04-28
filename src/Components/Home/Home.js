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
                    <h1>Reviews of the book "The Seven Habits of Highly Effective People"</h1>
                </div>
                <img src={coverPhoto} alt="" />
            </div>
            <div>
                <h3 className="reviews-title">Reviews</h3>
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