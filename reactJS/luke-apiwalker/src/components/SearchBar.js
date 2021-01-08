import React, { useEffect, useState } from 'react';
import styles from './SearchBar.module.css';

const SearchBar = (props) => {

    const searchData = (e) => {
        e.preventDefault();

    }; 

    return (
        <div className={styles.searchBar}>
            <form onSubmit={searchData}>
                <span>Search for:</span>
                <select name="category">
                    <option value="people">People</option>
                    <option value="planets">Planets</option>
                </select>
                <span>ID:</span>
                <input type="number" className={styles.idInput}></input>
                <button type="submit">Search</button>
            </form>
        </div>
    )
}

export default SearchBar;