import React, {useState} from 'react';
import axios from 'axios'; 

const PersonForm = (props) => {
    const { initialFirstName, initialLastName, onSubmitProp } = props;

    const [firstName, setFirstName] = useState(""); 
    const [lastName, setLastName] = useState("");

    const onSubmitHandler = e => {
        e.preventDefault();
        onSubmitProp({firstName, lastName});
    }

    return (
        <div>
            <form onSubmit={onSubmitHandler}>
                <p>
                    <label>First Name</label><br />
                    <input type="text" onChange ={(e) => setFirstName(e.target.value)} />
                </p>
                <p>
                    <label>Last Name</label><br />
                    <input type="text" onChange ={(e) => setLastName(e.target.value)} />
                </p>
                <input type="submit" />
            </form>
        </div>
    )
}

export default PersonForm;