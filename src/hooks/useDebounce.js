import { useState, useEffect } from 'react';

function useDebounce(value, delay) {
    const [debonceValue, setDebonceValue] = useState(value);

    useEffect(() => {
        const handle = setTimeout(() => setDebonceValue(value), delay);

        return () => clearTimeout(handle);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [value]);

    return debonceValue;
}

export default useDebounce;
