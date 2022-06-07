import React, { useEffect, useState } from 'react';
import ReviewCard from '../ReviewCard/ReviewCard';

const Review = () => {
    const [review, setReview] = useState([]);

    useEffect(() => {
        fetch('https://warm-citadel-67270.herokuapp.com/review')
            .then(res => res.json())
            .then(data => setReview(data))
    }, [])

    return (
        <div className='container mt-5 mb-5'>
            <h3 className='mb-5'>What our clients say about us?</h3>
            <div className="row gy-5 mt-5">
                {
                    review.map(review => <ReviewCard review={ review } key={ review.name }></ReviewCard>)
                }
            </div>
        </div>
    );
};

export default Review;