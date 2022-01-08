import { useState, useEffect } from 'react'

const useFetch = (url) => {
    const [isPending, setIsPending] = useState(true);
    const[statusCode, setStatusCode] = useState(null);
    const [error, setError] = useState(null);
    const [data, setData] = useState(null);
   

    useEffect(
        ()=> {
            const abortCont = new AbortController();
            const fetchPromise = fetch(url, {signal: abortCont.signal});
            fetchPromise.then((res) => 
            {if (res.ok) {
                console.log(res.status);
                setStatusCode(res.status);
                return res.json();}
            else {
                throw Error ('could not fetch the data');
            }}
                )
            .then((data) => {
                console.log(data);
                if(data.length > 0){
                    setData(data);
                }
                else{
                    throw Error ('could not fetch the data');
                }
                setIsPending(false)
            })
            .catch(err => {
                console.log(err.message);
                setError(err.message)
                setIsPending(false)
            })
            return () => {abortCont.abort();}
        }, [url]
    );
    return {data, isPending, error, statusCode}
}

export default useFetch;