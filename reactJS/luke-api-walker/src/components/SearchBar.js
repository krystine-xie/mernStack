import React from 'react';
import styles from './SearchBar.module.css';

const SearchBar = (props) => {
    const { handleSubmit, handleInputChange, searchInput } = props;

    return (
        <div className={styles.wrapper} >
            <form 
                className={styles.formDiv}
                onSubmit={handleSubmit}
            >
                <div>
                    <b>Search For:</b>
                    <select
                        className={styles.dropDown}
                        name="category"
                        onChange={handleInputChange}
                        value={ searchInput.category }
                    >
                        <option value="people">People</option>
                        <option value="planets">Planets</option>
                    </select>
                </div>
                <div>
                    <b>ID:</b>
                    <input
                        className={styles.idInput}
                        type="number"
                        name="id"
                        value={ searchInput.id }
                        onChange={ handleInputChange }
                    />
                </div>
                <input type="submit" value="Search" />
            </form>
        </div>
    )

}

export default SearchBar;