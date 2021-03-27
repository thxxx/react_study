import React, { useState } from 'react';

const useInput = initialValue => {
    const [value, setValue] = useState(initialValue);
    const onChange = event => {
        console.log(event.target);
    }


}

const App = () => {
    const name = useInput("Mr.");

    return(
        <div>
            <h1> Hello </h1>
            <input placeholder="Name" {...name}/>
        </div>
    );
};