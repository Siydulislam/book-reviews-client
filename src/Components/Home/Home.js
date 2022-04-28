import React from 'react';
import './Home.css';
import coverPhoto from '../../Assets/Images/the-seven-habits-of-highly-effective-people-1.jpg';

const Home = () => {
    return (
        <>
            <div className="section-container">
                <div>
                    <h1>Reviews of the book "The Seven Habits of Highly Effective People"</h1>
                </div>
                <img src={coverPhoto} alt="" />
            </div>
        </>
    );
};

export default Home;