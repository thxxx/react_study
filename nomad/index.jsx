import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import useAxios from './useAxios'


const App = () => {

    const { loading, error, data, refetch } = useAxios({ url: "https://yts.am/api/v2/list_movies.json" });

    return (
        <div className="App">
            <h1>{ data && data.status }</h1>
            <h2>{loading && "Loading"}</h2>
            <div>hello</div>
            <button onClick={refetch}>Refetch</button>
        </div>
    );
};

ReactDOM.render(<App />, rootElement);
