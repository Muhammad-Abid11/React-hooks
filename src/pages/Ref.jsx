import React from "react";
import { useState, useEffect, useRef } from "react";
export default function Ref() {
    const [inputValue, setInputValue] = useState("");
    const count = useRef(0);
    // console.log(count);// like const count = {current: 0}.

    useEffect(() => {
        count.current = count.current + 1;
    });
    /* 
       useState ko useEffect k body me state update krne sy infinite loop k wajah sy hum
         useRef ko useEffect k body me state update krten hen q k useRef k state update pe useEffect re-render nhi hoga
    */


    return (
        <>
            <input
                type="text"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
            />
            <h1>Render Count: {count.current}</h1>
        </>
    );
}


/*
Try typing in the input field, and you will
see the application render count increase.
*/


//1

// The useRef Hook allows you to persist values between renders.
// It can be used to store a mutable value that does not cause a re-render when updated.
// It can be used to access a DOM element directly.

//2  Does Not Cause Re - renders
//   If we tried to count how many times our application
//   renders using the useState Hook, we would be caught in an infinite
//   loop since this Hook itself causes a re - render.To avoid this,
//   we can use the useRef Hook.



//3 NOTE
// useRef() only returns one item.It returns an Object called current.
// When we initialize useRef we set the initial value: useRef(0).
//     It's like doing this: const count = {current: 0}. We can access the count by using count.current.