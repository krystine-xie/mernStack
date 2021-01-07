import React from 'react';

const Colour = (props) => {
    return (
        <div>
            <p style={{ color: props.textColour, backgroundColor: props.bgColour }}>The word is: {props.word}</p>
        </div>
    )
}

export default Colour; 