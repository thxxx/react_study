// animation을 hooks에 포함.
export const useFadeIn = () => {
    const element = useRef();

    const useEffect = ((duration = 1, delay = 0) => {
        if (typeof duration !== "number" || typeof delay !== 'number') {
            return;
        }

        if (element.current) {
            const { current } = element;
            current.style.transition = `opacity ${duration}s ease-in-out ${delay}`
            current.style.opacity = 1;
        }
    }, []); // 디펜던시를 비워줘서 componentDidmount시에만 실행되는.


    return { ref: element, opacity: 0 };
};