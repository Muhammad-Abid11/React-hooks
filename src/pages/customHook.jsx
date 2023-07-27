// use it by change file name in main.js file

import { useState, useEffect } from "react";

function CustomHook() {
    const { data, isLoading } = useFetch("https://jsonplaceholder.typicode.com/todos");
    //YHN dono sy receive ho rha hai

    // console.log(data)
    if (isLoading) {
        return <div>Loading...</div>;
    }
    return (
        <div>
            <h1>Hello Custom Hooks</h1>
            {data.map((item) => (
                <div key={item.id}>{item.title}</div>
            ))}
        </div>
    )
}

function useFetch(url) {
    const [data, setData] = useState([]);   //yahn initial value jo ayegi us k lihaz k data type ho 
    const [isLoading, setIsLoading] = useState(true);
    useEffect(() => {
        async function fetchData() {
            try {
                const response = await fetch(url);
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                const dataJson = await response.json();
                console.log(dataJson);
                setData(dataJson);
                setIsLoading(false);
            } catch (error) {
                console.error('There was an error:', error);
            }
        }

        fetchData();
    }, [url]);

    return { data, isLoading };
}

export default CustomHook;
