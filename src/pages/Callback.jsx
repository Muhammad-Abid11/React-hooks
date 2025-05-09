import React, { useState, useCallback, memo } from 'react'

export default function Callback() {
    const [count, setCount] = useState(0);
    const [todos, setTodos] = useState([]);
    const increment = () => {
        setCount((c) => c + 1);
    };
    /*     const addTodo = () => {
            setTodos((t) => [...t, "New Todo"]);
        }; */


    const addTodo = useCallback(() => {
        setTodos((t) => [...t, "New Todo"]);
    }, [todos]);

    return (
        <>
            <h1>CallBack</h1>
            <Todos todos={todos} addTodo={addTodo} />
            <hr />
            <div>
                Count: {count}
                <button onClick={increment}>+</button>
            </div>
        </>
    );
}

const Todos = ({ todos, addTodo }) => {
    console.log("child render");
    return (
        <>
            <h2>My Todos</h2>
            {todos.map((todo, index) => {
                return <p key={index}>{todo}</p>;
            })}
            <button onClick={addTodo}>Add Todo</button>
        </>
    );
};

// export default memo(Todos);