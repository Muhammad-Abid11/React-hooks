import React, { useState, memo } from 'react';
// Define a Memo Component
// The Memo Component is a Parent Component that contains a Child Component
// The Child Component is wrapped with the memo HOC
// The memo HOC is used to optimize the rendering of the Child Component
// The memo HOC is used to prevent unnecessary re-renders of the Child Component
// The memo HOC is used to prevent re-renders of the Child Component when the Parent Component re-renders
// The memo HOC is used to prevent re-renders of the Child Component when the props of the Parent Component change
// The memo HOC is used to prevent re-renders of the Child Component when the props of the Child Component do not change
// The memo HOC is used to prevent re-renders of the Child Component when the state of the Parent Component changes
// The memo HOC is used to prevent re-renders of the Child Component when the state of the Child Component changes

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
