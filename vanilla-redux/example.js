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

import { createStore } from "redux";

const add = document.getElementById("add");
const minus = document.getElementById("sub");
const text = document.getElementById("number");
const form = document.querySelector("form");
const ul = document.querySelector("ul");
const input = document.querySelector("input");

const ADD = "ADD";
const MINUS = "MINUS";

const ADDTODO = "addtodo";
const DELETETODO = "deletetodo";

// 이건 디스패치안에 넣을 객체만을 반환하는 함수이다.

const addTodo = text => {
    return {
        type: ADDTODO,
        text: text
    }
}

const deleteTodo = id => {
    return {
        type: DELETETODO,
        id: id
    }
}

const dipatchAddTodo = text => {
    hama.dispatch(addTodo(text));
}

const reducer = (state = [], action) => {
    switch (action.type) {
        case ADDTODO:
            return [...state, { text: action.text, id: Date.now() }];
        case DELETETODO:
            return state.filter(toDo => toDo.id !== action.id);
        default:
            return state;
    }
}

const dispatchDeleteTodo = e => {
    const id = parseInt(e.target.parentNode.id); // e.target은 클릭된 그 html을 읽어온다.
    hama.dispatch(deleteTodo(id));
};

const paintTodos = () => {
    const toDos = hama.getState();
    ul.innerHTML = "";
    toDos.forEach(toDo => {
        const li = document.createElement("li");
        const btn = document.createElement("button");
        btn.innerText = "delete";
        btn.addEventListener("click", dispatchDeleteTodo);
        li.id = toDo.id;
        li.innerText = toDo.text;
        li.appendChild(btn);
        ul.appendChild(li);
    })
}

const hama = createStore(reducer);
hama.subscribe(paintTodos);


const countModifier = (state = 0, action) => {
    // if (action.type === "ADD") {
    //     return state += 1;
    // } else if (action.type === "MINUS") {
    //     return state -= 1;
    // } else {
    //     return state;
    // }
    switch (action.type) {
        case ADD:
            return state += 1;
        case MINUS:
            return state -= 1;
        default:
            return state;
    }
}

const store = createStore(countModifier);

const onChange = () => {
    text.innerText = store.getState();
};
const onSubmit = e => {
    e.preventDefault();
    const toDo = input.value;
    input.value = "";
    dipatchAddTodo(toDo);
};

store.subscribe(() => { console.log(store.getState()) });

store.subscribe(onChange);

add.addEventListener("click", () => store.dispatch({ type: ADD }));

minus.addEventListener("click", () => store.dispatch({ type: MINUS }));

form.addEventListener("submit", onSubmit);

const state1 = ["a", "b", "c", "d"];

console.log(state1);

console.log(...state1);