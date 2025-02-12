import React, { useState, memo } from 'react';

//Optimize Component re-renders
const Child = memo(({ value }) => { //Child Component
    console.log('Child rendered');
    return <div>{value}</div>;
});

export default function Memo() { //Parent Component
    const [count, setCount] = useState(0);
    const [parentCount, setParentCount] = useState(0);
    return (
        <>
            <h1>Parent Count: {parentCount}</h1>
            <button onClick={() => setParentCount(parentCount + 1)}>Parent Increment</button>

            <button onClick={() => setCount(count + 1)}>Increment</button>
            <Child value={count} />
        </>
    );
}
