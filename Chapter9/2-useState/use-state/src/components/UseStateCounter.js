import React from 'react';

const UseStateCounter = () => {
    const [value, setValue] = React.useState(0);
    const complexIncrease = () => {
        setTimeout(() => {
            setValue(value + 1);
        }, 2000)
    }
    return (
        <>
            <h2>Number: {value}</h2>
            <button onClick={() => setValue(value + 1)}>Increase</button>
            <button onClick={() => setValue(value - 1)}>Decrease</button>
            <button onClick={() => setValue(0)}>Reset</button>
            <button onClick={complexIncrease}>Increase later</button>
        </>
    )
}

export default UseStateCounter;