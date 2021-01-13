import axios from 'axios';
import React, {useState, useEffect} from 'react'; 

import ProductForm from '../components/ProductForm';
import ProductList from '../components/ProductList';
import styles from './Main.module.css';

const Main = () => {
    const [product, setProduct] = useState([]);
    const [loaded, setLoaded] = useState(false);

    useEffect(() => {
        axios.get('http://localhost:8000/api/products')
            .then(res => {
                setProduct(res.data)
                setLoaded(true)
            })
    })

    const removeFromDom = productId => {
        setProduct(product.filter(product => product._id !== productId));
    }

    const createProduct = item => {
        axios.post('http://localhost:8000/api/products/new', item)
            .then(res=>{
                setProduct([...product, res.data]);
            })
    }

    return (
        <div className={styles.wrapper}>
            <h1 className={styles.headTitle}>Product Manager</h1>
            <ProductForm 
                onSubmitProp={createProduct} 
                initialTitle=""
                initialPrice=""
                initialDescription=""
            />
            <hr />
            <h2 className={styles.headTitle}>Product List</h2>
            { loaded && <ProductList products={product} removeFromDom={removeFromDom} /> }
        </div>
    )
}

export default Main;