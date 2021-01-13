import React, {useState} from 'react';
import styles from './ProductForm.module.css';

const ProductForm = (props) => {

    const { initialTitle, initialPrice, initialDescription, onSubmitProp } = props;

    const [title, setTitle] = useState(initialTitle); 
    const [price, setPrice] = useState(initialPrice);
    const [description, setDescription] = useState(initialDescription);

    const onSubmitHandler = e => {
        e.preventDefault();
        onSubmitProp({title, price, description});
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