export const useNetwork = onChange => {
    const [status, setStatue] = useState(navigator.onLine);
    const handleChange = () => {
        setStatus(navigator.onLine);
    }
    useEffect(() => {
        window.addEventListener("onLine", handleChange);
        window.addEventListener("offLine", handleChange);
        () => {
            window.removeEventListener("onLine", handleChange);
            window.removeEventListener("offLine", handleChange);
            // 지우고 말고의 효과가 뭘까?
        }
    }, [])

    return status;
}