import axios from 'axios';
import {useState, useEffect} from 'react';

 

export const useFetch = (url) => {
    const [data,setData] = useState([]);
    const [error,setError] = useState(null);
    const [loading,setLoading] = useState(false);

    console.log('urlh',url)

    useEffect(()=>{
        const fetchData = async () => {
            setLoading(true);
            try{
                const  res = await axios.get(url);

                if(!res.status===200 || !res.status===201){
                    setError('falied to fetch');
                    setLoading(false);
                    alert('falied to fetch');
                }
                console.log('bad',res);
                setData(res.data);
                setLoading(false);

            }catch(err){
                setError(err.messsage);
                setLoading(false);

            }
        }

        fetchData();
        console.log('useeffect')
    },[url])
  return (
   {
    data,
    error,
    loading

   }
  )
}

