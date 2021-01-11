import React, { useState } from 'react';
import { Router, navigate } from '@reach/router';

import SearchBar from './SearchBar';
import Results from './Results';

const Main = (props) => {
    const [searchInput, setSearchInput] = useState({
        category: 'people',
        id: ''
    })

    const handleInputChange = (e) => {
        setSearchInput({
            ...searchInput,
            [e.target.name]: e.target.value
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        const { category, id } = searchInput; 
        console.log(searchInput);
        navigate(`/${category}/${id}`);
    }

    return (
        <div>
            <h1>Luke ApiWalker</h1>
            <SearchBar 
                searchInput={searchInput}
                handleInputChange={handleInputChange}
                handleSubmit={handleSubmit}
            />
            <Router>
                <Results path="/:category/:id" />
            </Router> 
        </div>
    )
}

export default Main;