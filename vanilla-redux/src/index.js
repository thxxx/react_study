// import React from 'react';
// import ReactDOM from 'react-dom';
// import './index.css';
// import App from './App';
// import reportWebVitals from './reportWebVitals';

// ReactDOM.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>,
//   document.getElementById('root')
// );

// // If you want to start measuring performance in your app, pass a function
// // to log results (for example: reportWebVitals(console.log))
// // or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();


const plus = document.getElementById("add");
const minus = document.getElementById("sub");
const number = document.querySelector("span");

let count = 1;

updateText();

const updateText = () => {
    number.innerText = count;
}

const handleAdd = () => {
    console.log("add");
    count += 1;
    updateText();
}

const handelMinus = () => {
    console.log("minus");
    count -= 1;
    updateText();
}

plus.addEventListener("click", handleAdd);
minus.addEventListener("click", handelMinus);