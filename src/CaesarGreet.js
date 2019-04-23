import React from 'react';

function CaesarGreet(props) {
    return (
        <h2>You too, {greetingCaesar(props.name)}!</h2>
    )
}

function greetingCaesar(string) {
    let caesar = '';
    for (let i = 0; i < string.length; i++) {
        let char = string[i];
        let ascii = string.charCodeAt(i);
        if((ascii) >= 65 && (ascii) <= 90) {
            char = String.fromCharCode(((ascii - 65 + 13) % 26) +65);
        } else if ((ascii) >= 97 && (ascii) <= 1222) {
            char = String.fromCharCode(((ascii - 97 + 13) % 26) + 97);
        }
        caesar += char;
    }
    return caesar;
}
export default CaesarGreet;