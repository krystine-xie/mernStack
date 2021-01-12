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
                setProduct(res.data);
                setLoaded(true);
            })
    }, [])

    return (
        <div className={styles.wrapper}>
            <h1 className={styles.headTitle}>Product Manager</h1>
            <ProductForm />
            <hr />
            <h2 className={styles.headTitle}>Product List</h2>
            { loaded && <ProductList products={product} /> }
        </div>
    )
}

export default Main;