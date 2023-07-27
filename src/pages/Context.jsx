// use it by change file name in main.jsx file
import React, { useState, createContext } from "react";

const UserContext = createContext();
// UserContext k jo bhi direct/indirect child hoga
// usy state k access mil jayega jo usy parameter me diya jayega

export default function Context() {
    const [user, setUser] = useState("Jesse Hall");
    return (
        <div>
            <h1>{`Hello ${user}!`}</h1>
            <UserContext.Provider value={user}> {/*hum 1 hi prop pass krten hen*/}
                <Component2 />
            </UserContext.Provider>
            <button onClick={() => setUser("Abid")}>
                Press Me
            </button>
        </div>
    );
}

function Component2() {
    return (
        <>
            <h1>Component 2</h1>
            <Component3 />
        </>
    );
}

function Component3() {
    return (
        <>
            <h1>Component 3</h1>
            <Component4 />
        </>
    );
}

function Component4() {
    return (
        <>
            <h1>Component 4</h1>
            <Component5 />
        </>
    );
}

// 
import { useContext } from "react"

function Component5() {
    const user = useContext(UserContext);

    return (
        <>
            <h1>Component 5</h1>
            <h2>{`Hello ${user} again!`}</h2>

        </>
    );
}

// Reason
// 1.React Context is a way to manage state globally.
//   It can be used together with the useState Hook to share state
//   between deeply nested components more easily than with useState alone.

//2. To do this without Context, we will need to pass the state as
//   "props" through each nested component.This is called "prop drilling".
