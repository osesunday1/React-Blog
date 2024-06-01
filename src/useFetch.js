import { useEffect, useState } from "react";

const useFetch = (url, dependency) => {
    const [data, setData] = useState([])
    const[isPending, setIsPending] = useState(true)
    const[error, setError] = useState(null)
    //http://localhost:8000/blogs

    useEffect(() => {
      setIsPending(true);
        fetch(url)
          .then(res => {
            if(!res.ok){
              throw Error ('could not load data')
            }
            return res.json();
          })
          .then(data => {
            setData(data);
            setIsPending(false)
            setError(null)
          })
          .catch(err=>{
            setIsPending(false)
            setError(err.message)
          });
      }, [url, dependency]);
      
      return {data, isPending, error}
}

export default useFetch;