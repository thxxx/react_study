import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';

const useTitle = (initialTitle) => {
    const [title, setTitle] = useState(initialTitle);
    const updateTitle = () => {
        const htmlTitle = document.querySelector("title");
        htmlTitle.innerText = title;
    };
    useEffect(updateTitle, [title]); // title이 바뀌면 유즈이펙트에 의해서 updateTitle 함수가 다시 불려진다.
    return setTitle; // useTitle을 setTitle함수처럼 사용한다.
};

const useClick = (onClick) => {
    if (typeof onClick !== 'function')
    const element = useRef(); // 이 레퍼런스를 반환한다.
    useEffect(() => {
        if(element.current){ // current가 뭘 의미하는거였나 시발
            element.current.addEventListener("click", onClick); // componentWillUnMount마다 이벤트리스너를 지워줘야한다.
        }
        return () => { // 컴포넌트윌언마운트 시에 이 리턴 함수가 호출된다.
            if(element.current){ 
                element.current.removeEventListener("click", onClick);
            }
        };
    }, []); // []가 없으면 항상 이벤트리스너가 add되니까. []를 주는거임
    return element; // 여기서 반환
}

const App = () => {
    const sayHello = () => {
        console.log("say hello");
    };
    const title = useClick(sayHello);

    const potato = useRef();
    setTimeout(() => {console.log(potato.current)}, 5000);

    const titleUpdater = useTitle("Loading...");
    setTimeout(()=>titleUpdater("Home"), 5000);

    return (
        <div className="App">
            <div>Hi</div>
            <h1 ref={title}></h1>
            <input ref={potato} placeholder="la" /> 
        </div>
    );
};

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);