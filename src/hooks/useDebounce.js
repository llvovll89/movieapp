import { useEffect, useState } from "react";

const useDebounce = (value, delay) => {
    const [ debounceVal, setDebounceVal ] = useState(value);

    useEffect(() => {
        const timer  = setTimeout(() => {
            setDebounceVal(value);
        }, delay);

        return () => {
            clearTimeout(timer);
        }
    }, [value, delay])

    return debounceVal;
}

export default useDebounce;