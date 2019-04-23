import React from 'react';

function GreetLowercase(props) {
    return (
        <h1>
            Hello, {props.name.toLowerCase()}!
        </h1>
    )
}

export default GreetLowercase;