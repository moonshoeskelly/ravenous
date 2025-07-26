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
        <div className={styles.Business}>
            <div className={styles.businessHeader}>
                <img src={business.image} alt="" desc="" title="" />
                <h2>{business.name}</h2>
            </div>
            <div className={styles.BusinesssInfo}>
                <div className={styles.businessAddress}>
                    <p>{business.address}</p>
                    <p>{business.city}</p>
                    <p>{business.state} {business.zipCode}</p>
                </div>
                <div className={styles.businessRanking}>
                    <h3>{business.category}</h3>
                    <p className={styles.rating}>{`${business.rating}/5 stars`}</p>
                    <p>{`${business.reviewCount} reviews`}</p>
                </div>
            </div>
        </div>
    );
}

export default Business;