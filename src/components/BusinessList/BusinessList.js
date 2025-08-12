import React from 'react';
import styles from './BusinessList.module.css';

import Business from '../Business/Business';


function BusinessList ({ businesses }) {

    return (
       <div className={styles.BusinessList}>
            {businesses.map((business) => {
                return <Business key={business.id} business={business} />
            })}
        </div>
    );
}

export default BusinessList;