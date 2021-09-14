import React, { useReducer } from "react";

const counterReducer = (state, action) => {
    console.log('state:', state);
    console.log('action:', action);
    switch (action.type) {
        case 'INCREASE':
            return {
                ...state,
                counter: state.counter + 1
            };
        case 'DECREASE':
            return {
                ...state,
                counter: state.counter - 1
            }
        default:
            throw new Error();
    }
}
const CounterWithReducer = () => {
    const [state, dispatch] = useReducer(counterReducer, { counter: 0 });

    const handleClickIncrease = () => {
        dispatch({ type: 'INCREASE' })
    }

    const handleClickDecrease = () => {
        dispatch({ type: 'DECREASE' })
    }
    return (
        <>
            <div className={'counter'}>
                <h1>{state.counter}</h1>
            </div>
            <div>
                <button onClick={handleClickIncrease}>Tăng</button>
                <button onClick={handleClickDecrease}>Giảm</button>
            </div>
        </>
    )
}

export default CounterWithReducer;