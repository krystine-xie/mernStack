import React, { useState, useEffect } from 'react'; 
import { Link, navigate } from '@reach/router';
import styles from './EditAuthor.module.css';

import AuthorForm from '../components/AuthorForm';
import axios from 'axios';

const EditAuthor = (props) => {
    const { id, updateDom } = props; 
    const [authorToEdit, setAuthorToEdit] = useState({});
    const [loaded, setLoaded] = useState(false);

    const [editErrors, setEditErrors] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:8000/api/authors/' + id)
            .then(res => {
                console.log(res.data[0]);
                setAuthorToEdit(res.data[0]);
                setLoaded(true);
            })
            .catch(err => {
                setAuthorToEdit('');
                setLoaded(false);
            })
            
        // eslint-disable-next-line
    }, [])

    const updateAuthor = targetAuthor => { 
        axios.put('http://localhost:8000/api/authors/' + id, targetAuthor)
            .then(res => {
                console.log(res);
                updateDom(targetAuthor);
                navigate("/");
            })
            .catch(err =>{
                const errorResponse = err.response.data.errors;
                const errArr = [];
                for (const key of Object.keys(errorResponse)) {
                    errArr.push(errorResponse[key].message);
                }

                setEditErrors(errArr);
            });
    }

    return (
        <div>         
            <Link to="/">Home</Link>  
            
            {loaded && authorToEdit ?
                <div>
                    <h3>Edit this Author:</h3> 
                    <AuthorForm 
                        onSubmitProp={updateAuthor}
                        initialFirstName={authorToEdit.firstName}
                        initialLastName={authorToEdit.lastName}
                        errors={editErrors}
                        authorToEdit={authorToEdit}
                    /> 
                </div>
                
                : 

                <div className={styles.missingMessage}>
                    <h2>We're sorry, but we could not find the author you are looking for. Would you like to add this author to our database?</h2>
                    <Link to="/authors/new">Add Author</Link>
                </div>  
            }
        </div>
    )
}

export default EditAuthor;