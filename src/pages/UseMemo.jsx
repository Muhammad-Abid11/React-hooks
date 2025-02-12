import React, { useState, useMemo } from "react";

const UseMemo = () => { //Parent Component
    const [num, setNum] = useState(1);
    const [toggle, setToggle] = useState(false);

    // Memoizing an expensive computation
    const squaredNumber = useMemo(() => {
        console.log("Calculating square...");
        return num * num;
    }, [num]); // Runs only when `num` changes

    return (
        <div>
            <h2>Toggle state {toggle ? 'true' : 'false'}</h2>
            <h2>Number: {num}</h2>
            <h2>Squared: {squaredNumber}</h2>
            <button onClick={() => setNum(num + 1)}>Increase Number</button>
            <button onClick={() => setToggle(!toggle)}>Toggle State</button>
        </div>
    );
};

export default UseMemo;
