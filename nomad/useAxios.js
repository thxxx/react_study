import defaultAxios from "axios";

const useAxios = (opts, axiosInstace = defaultAxios) => {
    const [state, setState] = useState({
        loading: true,
        error: null,
        data: null
    });
    const [trigger, setTrigger] = useState(0);

    if (!opts.url) {
        return;
    }
    const refetch = () => {
        setState({
            ...state,
            loading: true
        });
        setTrigger(Data.now());
    }
    useEffect(() => {
        axiosInstace(opts).then(data => {
            setState({
                ...state,
                loading: false,
                data
            });
        }).catch(error => {
            setState({...state, loading: false, error });
        })
    }, [trigger]);

    return {...state, refetch };
};