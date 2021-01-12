import React from 'react'; 

const ProductList = (props) => {
    return (
        <div>
            <ul>
                {
                    props.products.map((product, idx) => {
                        return <li key={idx}> <a href={`products/${product._id}`}>{product.title} </a> </li>
                    })
                }
            </ul>
        </div>
    )
}

export default ProductList;