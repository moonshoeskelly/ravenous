import React from 'react';
import styles from './BusinessList.module.css';

import Business from '../Business/Business';


function BusinessList (props) {

    return (
       /* <div class="businesss-list">
            {props.businesses.map((business) => {
                return <Business key={business.id} info={business} />
            })};
        </div> */
        <div className={styles.BusinessList}>
            <Business />
            <Business />
            <Business />
            <Business />
            <Business />
            <Business />
            <Business />
        </div>
    );
}

export default BusinessList;