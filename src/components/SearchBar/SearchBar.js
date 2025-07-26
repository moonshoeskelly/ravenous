import React, { useState } from 'react';
import styles from './SearchBar.module.css';

const SearchBar = () => {

    const sortOptions = [
    { value: "best_match", option: "Best Match" },
    { value: "rating", option: "Highest Rated" },
    { value: "review_count", option: "Most Reviewed" }
  ];

    const [activeButton, setActiveButton] = useState(null);

    const sortingClick = (buttonId) => {
    setActiveButton(buttonId);
  };

    return (
        <div className={styles.SearchBar}>
            <div className={styles.SearchBarSorting}>
                {sortOptions.map((option) => (
                <button key={option.value} onClick={() => sortingClick(option.value)} 
                className={`${activeButton === option.value ? styles.active : ''}`}>
                {option.option}</button>
                ))}
            </div>
            <div className={styles.SearchBarInputs}>
                <input id={styles["business-type"]} type="text" placeholder="Search Business?"/>
                <input id={styles["location"]} type="text" placeholder="Where?" />
            </div>
            <button className={styles.Submit} type="submit">
            Let's Go
            </button>
        </div>
    );
}

export default SearchBar;