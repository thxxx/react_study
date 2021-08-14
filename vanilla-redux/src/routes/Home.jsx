import React from 'react';
import useState from 'react';
import { set } from 'react-native-reanimated';

function Home() {
    const [text, setText] = useState("");

    const onChange = e => {
        setText(e.target.value);
    }

    const onSubmit = e => {
        e.preventDefault();
        setText("");
        console.log(text);
    }

    return (<>
        <h1> To do welcome </h1>
        <form onSubmit={onSubmit}>
            <input type="text" value={text} onChange={onChange}></input>
            <button>Add</button>
        </form>
    </>);
}

export default Home;