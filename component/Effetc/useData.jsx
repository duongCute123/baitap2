import { useState, useEffect } from "react";
export const useFetch = (url) => {
    const [data, setdata] = useState([])
    useEffect(() => {
        const fetchdata = async () => {
            try {
                const response = await fetch(url)
                const data = await response.json()
                setdata(data)
            } catch (error) {
                console.log(error)
            }
        }
        fetchdata()
    }, [url])
    return data;
}
export default useFetch