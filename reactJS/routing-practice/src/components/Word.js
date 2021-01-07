import React from 'react';

const Word = (props) => {

    return (
        <div>
            {
                isNaN(props.word) ? <p>The word is: {props.word}</p> : null
            }
        </div>
    )
}

export default Word; 