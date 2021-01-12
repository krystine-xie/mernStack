import React, {useState} from 'react';
import axios from 'axios'; 
import styles from './ProductForm.module.css';

const ProductForm = () => {
    const [title, setTitle] = useState(""); 
    const [price, setPrice] = useState("");
    const [description, setDescription] = useState("");

    const onSubmitHandler = e => {
        e.preventDefault();
        axios.post('http://localhost:8000/api/products/new', {
            title,
            price,
            description

        })
            .then(res => console.log(res))
            .catch(err => console.log(err))
    }

    return (
        <div className={styles.wrapperForm}>
            <form onSubmit={onSubmitHandler}>
                <p>
                    <label>Title</label><br />
                    <input 
                        className={styles.input}
                        type="text" 
                        value={title}
                        onChange ={(e) => setTitle(e.target.value)} 
                    />
                </p>
                <p>
                    <label>Price</label><br />
                    <input 
                        className={styles.input}
                        type="number" 
                        value={price}
                        step="0.01"
                        onChange ={(e) => setPrice(e.target.value)} />
                </p>
                <p>
                    <label>Description</label><br />
                    <textarea 
                        className={styles.textArea}
                        value={description} 
                        onChange ={(e) => setDescription(e.target.value)} 
                    />
                </p>
                <input
                    className={styles.button}
                    type="submit" />
            </form>
        </div>
    )
}

export default ProductForm;