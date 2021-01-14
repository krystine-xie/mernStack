import React, { useState, useEffect } from 'react'; 
import { navigate, Router } from '@reach/router';
import axios from 'axios';

import AuthorList from './AuthorList';
import NewAuthor from './NewAuthor';
import EditAuthor from './EditAuthor';

const Main = () => {
    const [authors, setAuthors] = useState([]); 
    const [loaded, setLoaded] = useState(false);
    const [errors, setErrors] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:8000/api/authors')
            .then(res => {
                console.log(res.data);
                setAuthors(res.data);
                setLoaded(true);
            })
    }, [])

    const createAuthor = newAuthor => {
        axios.post('http://localhost:8000/api/authors', newAuthor)
            .then(res=>{
                console.log(res.data);
                setAuthors([...authors, res.data]);
                navigate('/');
            })
            .catch(err =>{
                const errorResponse = err.response.data.errors;
                const errArr = [];
                for (const key of Object.keys(errorResponse)) {
                    errArr.push(errorResponse[key].message);
                }

                setErrors(errArr);
            })
    }

    const removeFromDom = authorId => {
        setAuthors(authors.filter(author => author._id !== authorId));
    }

    const updateDom = author => {
        for (let i=0; i< authors.length; i++) {
            if (author._id === authors[i]._id) {
                var index = i;
                console.log(index)
                
            }
            console.log(author);
        } 

        let newArray = [...authors]
        newArray[index] = author;
        
        setAuthors(newArray); 
    }

    return (
        <div>    
            <h1>Favourite Authors</h1>
            <Router>
                { loaded && <AuthorList 
                    path="/" 
                    authors={authors}
                    removeFromDom={removeFromDom}
                /> }
                <NewAuthor 
                    path="/authors/new"
                    authors={authors}
                    createAuthor={createAuthor}
                    errors={errors}
                
                />
                <EditAuthor 
                    path="/authors/:id/edit" 
                    authors={authors}
                    setAuthors={setAuthors}
                    errors={errors}
                    setErrors={setErrors}
                    updateDom={updateDom}
                />
            </Router>
        </div>
    )
}

export default Main;