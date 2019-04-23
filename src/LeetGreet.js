import React from 'react';
function Greet(props) {
    return (
        <h1>
            Hello, {LeetGreet(props.name)}!
        </h1>
    )
}

function LeetGreet(props) {
    const leetDictionary = {
        // Keys are strings, just like in python
        // But in JS, quotes are optional
        A: '4',
        E: '3',
        G: '6',
        I: '1',
        O: '0',
        S: '5',
        T: '7'
    };
    let result = '';
    for (let i = 0; i < props.length; i++) {
        let theLetter = props[i].toUpperCase();
 
        if (leetDictionary[theLetter] !== undefined) {
            result += leetDictionary[theLetter];
        } else {
            // if not, just copy letter into `result`
            result += theLetter
        }
    }
    return result;
}
 

export default Greet;