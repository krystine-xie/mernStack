import React from 'react'; 
import { Link } from '@reach/router';

import AuthorForm from '../components/AuthorForm';

const NewAuthor = (props) => {

    const { createAuthor, errors } = props;

    return (
        <div>
            <Link to="/">Home</Link> 
            <h3>Add a new author:</h3>  
            <AuthorForm
                onSubmitProp={createAuthor} 
                authorToEdit={{firstName: "", lastName:""}}
                errors={errors}
            />     
        </div>
    )
}

export default NewAuthor;