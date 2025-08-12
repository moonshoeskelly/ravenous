import React, { useState } from "react";
import './App.css';
import SearchBar from './components/SearchBar/SearchBar';
import BusinessList from './components/BusinessList/BusinessList';
import yelpSearch from "./utils/yelp";

function App() {
    const [businesses, setBusinesses] = useState([]);
    const [showMessage, setShowMessage] = useState(false);
    const [showNoResults, setShowNoResults] = useState(false);

    const searchYelp = async (term, location, sortBy) => {
        try {
            const results = await yelpSearch.search(term, location, sortBy);
            setBusinesses(results);

            if (!results) {
                setShowMessage(true);
            } else if (results.length === 0) {
                setShowMessage(false);
                setShowNoResults(true);
            } else {
                setShowMessage(false);
                setShowNoResults(false);
            }

        } catch (error) {
            console.error('Search failed:', error.message);
        }
    };

    return (
        <div className="App">
        <h1>Ravenous</h1>
        <SearchBar searchYelp={searchYelp} />
        {showMessage && (
          <div className="message">
            <p>
              There is a server error, please try again later.
            </p>
          </div>
        )}
        {showNoResults && (
          <div className="noResults">
            <p>
              No results found, please try a different search.
            </p>
          </div>
        )}
        <BusinessList businesses={businesses} />
        </div>
    );
}

export default App;
