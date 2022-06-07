import { faChartBar, faFill, faHeart, faUsers } from '@fortawesome/free-solid-svg-icons';
import React from 'react';
import DisCountCard from './DisCountCard';
import './Discount.css'

const discountData = [
    {
        photo: faFill,
        title: 'active orders',
        number: 502652
    },
    {
        photo: faChartBar,
        title: 'target clients',
        number: 14523552
    },
    {
        photo: faHeart,
        title: 'happy customers',
        number: 6252522
    },
    {
        photo: faUsers,
        title: 'client review',
        number: 7052536
    }
]

const DisCount = () => {
    return (
        <div className='container-fluid discount margin'>
            <div className='container'>
                <div className="row">
                    {
                        discountData.map(discount => <DisCountCard discount={ discount } key={ discount.photo }></DisCountCard>)
                    }
                </div>
            </div>
        </div>
    );
};

export default DisCount;