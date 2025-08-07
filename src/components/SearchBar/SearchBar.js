import React, { useState } from 'react';
import styles from './SearchBar.module.css';

const SearchBar = () => {

    const sortOptions = [
        { value: "best_match", option: "Best Match" },
        { value: "rating", option: "Highest Rated" },
        { value: "review_count", option: "Most Reviewed" }
    ];

    const [activeButton, setActiveButton] = useState(sortOptions[0].value);
    const [sortOption, setSortOption] = useState("best_match");
    const [searchTerm, setSearchTerm] = useState('');
    const [location, setLocation] = useState('');

    const handleSortButtonClick = (clickEvent) => {
      const selectedValue = clickEvent.target.value;
      sortingClick(selectedValue);
    };

    const sortingClick = (selectedSortValue) => {
        setActiveButton(selectedSortValue);
        sortOptionSelect(selectedSortValue);
    };

    const sortOptionSelect = (selectedSortValue) => {
      setSortOption(selectedSortValue);
    };

    const searchTermInput = (inputEvent) => {
        setSearchTerm(inputEvent.target.value);
    }

    const locationInput = (inputEvent) => {
        setLocation(inputEvent.target.value);
    }

    const handleSearch = () => {
      console.log(`Searching Yelp with ${searchTerm}, ${location}, ${sortOption}`);
    };

    return (
        <div className={styles.SearchBar}>
            <div className={styles.SearchBarSorting}>
                {sortOptions.map((option) => (
                <button 
                    key={option.value} 
                    value={option.value}
                    onClick={handleSortButtonClick}
                    className={activeButton === option.value ? styles.active : ''}>
                    {option.option}
                </button>
                ))}
            </div>
            <div className={styles.SearchBarInputs}>
                <input id={styles["business-type"]} type="text" placeholder="Search Business?" value={searchTerm} onInput={searchTermInput}/>
                <input id={styles["location"]} type="text" placeholder="Where?" value={location} onInput={locationInput}/>
            </div>
            <button className={styles.Submit} type="submit" onClick={handleSearch}>
            Let's Go
            </button>
        </div>
    );
}

export default SearchBar;