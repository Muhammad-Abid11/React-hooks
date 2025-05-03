import React, { useState, useMemo } from 'react';

const ExpensiveComponent = ({ data }) => {
    // Use state to manage an input value
    const [inputValue, setInputValue] = useState('');

    // Use useMemo to memoize the result of the expensive calculation
    const result = useMemo(() => {
        console.log('Calculating expensive result...');
        // Some expensive calculation using data and inputValue
        return data.filter(item => item.includes(inputValue.toLocaleLowerCase()));
    }, [data, inputValue]);

    // Handle input change
    const handleInputChange = (event) => {
        setInputValue(event.target.value);
    };

    return (
        <div>
            {/* Input field to update inputValue */}
            <input
                type="text"
                value={inputValue}
                onChange={handleInputChange}
                placeholder="Filter data"
            />

            {/* Display the memoized result */}
            <div>
                <h3>Result:</h3>
                <ul>
                    {result.map((item, index) => (
                        <li key={index}>{item}</li>
                    ))}
                </ul>
            </div>
        </div>
    );
};


export default function Memo2() {
    // Some data for the example
    const data = ['apple', 'banana', 'cherry', 'date', 'fig'];
    return (
        <div>
            <h2>Memo2 Example Component</h2>
            <ExpensiveComponent data={data} />
        </div>
    );
};

