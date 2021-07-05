import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import useAxios from './useAxios';
/*
사용자가 버튼을 클릭하면 진짜 할거니? 라고 물어보는 useConfirm
*/

const useConfirm = (message= "", callback, rejection) => {
    if( typeof(callback) !== 'function' ){
        return ;
    }
    const confirmAction = () => {
        if(confirm(message)){
            callback();
        }else{
            rejection();
        }
    }
    return confirmAction;
};
// 두개의 함수를 반환. 보호할 때의 함수, 아닐때의 함수
const usePreventLeave = () => {
    const listener = (event) => {
        event.preventDefault();
        event.returnValue = "";
    };

    const enablePreventLeave = () => { window.addEventListener("beforeunload", listener); }
    const disablePreventLeave = () => { window.removeEventListener("beforeunload", listener); }

    return {enablePreventLeave, disablePreventLeave};
};
// animation을 hooks에 포함.
const useFadeIn = () => {
    const element = useRef();

    const useEffect = ((duration = 1, delay=0) => {
        if( typeof duration !== "number" || typeof delay !== 'number'){
            return;
        }

        if(element.current){
            const {current} = element;
            current.style.transition = `opacity ${duration}s ease-in-out ${delay}`
            current.style.opacity = 1;
        }
    }, []); // 디펜던시를 비워줘서 componentDidmount시에만 실행되는.


    return {ref:element, opacity:0};
};

const App = () => {
    const fadeInH1 = useFadeIn(2,0);
    const fadeInP = useFadeIn(3,2);

    const deleteWorld = () => console.log("dd");
    const abort = () => console.log("cancel");
    const confirmDelete = useConfirm("Are you sure you want to delete", deleteWorld, abort); 
    
    const {enablePreventLeave, disablePreventLeave} = usePreventLeave();

    const request = useAxios({url:"https://yts.am/api/v2/list_movies.json"});
    return (
        <div className="App">
            <button onClick={confirmDelete}>Delete the world</button>
            <button onClick={enablePreventLeave}>Protect</button>
            <button onClick={disablePreventLeave}>UnProtect</button>

            <h1 {...fadeInH1}>Hello</h1>
            <p {...fadeInP}>blah blah someee thing</p>
        </div>
    );
};

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);