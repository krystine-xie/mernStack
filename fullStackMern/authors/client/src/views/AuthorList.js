import React from 'react'; 
import { Link } from '@reach/router';
import styles from './AuthorList.module.css';

import DeleteButton from '../components/DeleteButton.js';
import EditButton from '../components/EditButton.js'

const AuthorList = (props) => {

    const { authors, removeFromDom } = props;


    return (
        <div className={styles.wrapper}>
            <Link to="/authors/new">Add New Author</Link>  
            <table className={styles.table}>
                <thead>
                    <tr>
                        <th>Author</th>
                        <th>Actions Available</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        authors.map((author, idx) => {
                            return (
                                <tr key={idx}>
                                    <td>{author.lastName}, {author.firstName}</td>
                                    <td>
                                        <EditButton
                                            authorId={author._id}
                                        />  
                                        <DeleteButton 
                                            authorId={author._id} 
                                            successCallback={removeFromDom}
                                        />
                                    </td>
                                </tr>
                                )
                        })


                    }
                
                </tbody> 
            </table>
        </div>
    )

}

export default AuthorList;