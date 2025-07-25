import React from 'react';
import styles from './Business.module.css';

function Business (props) {
    const business = {
        image: 'https://content.codecademy.com/programs/react/ravenous/pizza.jpg',
        name: 'MarginOtto Pizzeria',
        address: '1010 Paddington Way',
        city: 'Flavortown',
        state: 'NY',
        zipCode: '10101',
        category: 'Italian',
        rating: 4.5,
        reviewCount: 90
    }

    return (
        <div>
            <div>
                <img src={business.image} alt="" desc="" title="" />
                <h3>{business.name}</h3>
                <p>{business.address}</p>
                <p>{business.city}</p>
                <p>{business.state}</p>
                <p>{business.zipCode}</p>
                <p>{business.category}</p>
                <p>{business.rating}</p>
                <p>{business.reviewCount}</p>
            </div>
        </div>
    );
}

export default Business;