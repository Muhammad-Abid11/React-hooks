// if useRef not this error will comes

import React from "react";
import { useState, useEffect, useRef } from "react";
export default function App() {
    const [inputValue, setInputValue] = useState("");
    let [count, setCount] = useState(0)

    useEffect(() => {
        setCount(
            count = count + 1
        )
    });
    return (
        <>
            <input
                type="text"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
            />
            <h1>Render Count: {count}</h1>
        </>
    );
}

/*
Try typing in the input field, and you will
see the application render count increase.
*/
