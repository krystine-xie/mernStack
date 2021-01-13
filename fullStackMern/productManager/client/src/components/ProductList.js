import React, {useState, useEffect} from 'react'; 
import axios from 'axios';
import styles from './ProductList.module.css';

import DeleteButton from './DeleteButton'

const ProductList = (props) => {

    const [product, setProduct] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:8000/api/products')
            .then(res => setProduct(res.data));
    }, [])

    const removeFromDom = productId => {
        setProduct(product.filter(product => product._id !== productId))
    }

    return (
        <div className={styles.wrapper}>
            <ul>
                {
                    props.products.map((product, idx) => {
                        return <li key={idx}> <a href={`products/${product._id}`}>{product.title} </a> | 
                        <DeleteButton 
                            productId={product._id} 
                            successCallBack={()=>removeFromDom(product._id)} 
                        />
                        </li>
                    })
                }
            </ul>
        </div>
    )
}

export default ProductList;