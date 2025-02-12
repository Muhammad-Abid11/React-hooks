import React, { useState, useCallback, memo } from "react";

// Child component memoized using React.memo
const ChildComponent = memo(({ handleClick }) => {
    console.log("ChildComponent re-rendered");
    return <button onClick={handleClick}>Click Me</button>;
});

const UseCallback = () => {
    const [count, setCount] = useState(0);
    const [toggle, setToggle] = useState(false);

    // Memoized function using useCallback
    const handleClick = useCallback(() => {
        console.log("Button clicked!");
    }, []); // No dependencies → function remains the same

    return (
        <div>
            <h2>Parent Count: {count}</h2>
            <button onClick={() => setCount(count + 1)}>Increase Count</button>
            <h2>Parent Toggle: {toggle ? 'true' : 'false'}</h2>
            <button onClick={() => setToggle(!toggle)}>Toggle State</button>
            <ChildComponent handleClick={handleClick} />
        </div>
    );
};

export default UseCallback;
