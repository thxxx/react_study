import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import useAxios from './useAxios'


const App = () => {
    const handleNetworkChange = (online) => {
        console.log(online ? "We are online" : "We are offline");
    };
    const onLine = useNetwork();

    const {loading, error, data} = useAxios({url:"https://yts.am/api/v2/list_movies.json"});
    console.log(loading, error, data);
    
    return (
        <div className="App">
            <div>{onLine ? "Online" : "Offline"}</div>
        </div>
    );
};

ReactDOM.render(<App />, rootElement);
