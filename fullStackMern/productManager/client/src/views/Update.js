import React, {useEffect, useState} from 'react'; 
import axios from 'axios'; 
import PersonForm from '../components/ProductForm';
import DeleteButton from '../components/DeleteButton';
import { navigate } from '@reach/router';

const Update = (props) => {

    // this is coming from the params in Router in App.js
    const { id }  = props; 
    const [item, setItem] = useState({});
    const [loaded, setLoaded] = useState(false);

    useEffect(() => {
        axios.get('http://localhost:8000/api/products/' + id)
            .then(res => {
                console.log(res.data[0]);
                setItem(res.data[0]);
                setLoaded(true);
            })
        // eslint-disable-next-line
    }, [])

    const updateItem = item => {
        axios.put('http://localhost:8000/api/products/' + id, item)
            .then(res => {
                console.log(res)
                navigate(`/products/${id}`);
            });
    }

    return (
        <div>
            {loaded && (
                <div>
                    <PersonForm
                        onSubmitProp={updateItem}
                        initialTitle={item.title}
                        initialPrice={item.price}
                        initialDescription={item.description}
                    />
                    <DeleteButton 
                        productId={item._id}
                        successCallback={() => navigate("/")}
                    />
                </div>
            )}
        </div>
    )
}

export default Update;