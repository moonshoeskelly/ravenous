import React from 'react';
import styles from './SearchBar.module.css';

const SearchBar = () => {

    return (
        <div className={styles.SearchBar}>
            <input id="business-type" type="text" placeholder="Search Business?"/>
            <input id="location" type="text" placeholder="Where?" />
            <button id="submit" type="submit">
            Let's Go
            </button>
        </div>
    );
}

export default SearchBar;