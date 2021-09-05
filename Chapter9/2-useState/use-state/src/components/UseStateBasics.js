import React, { useState } from 'react';

const UseStateBasics = () => {
    const [text, setText] = useState('Hello World');
    const handleClick = () => {
        if (text === 'Hello World') {
            setText('Hello WebFullStack 51')
        } else {
            setText('Hello World');
        }
    }

    return (
        <React.Fragment>
            <h1>{text}</h1>
            <button type={'button'} className={'btn'} onClick={handleClick}>
                Change Title
            </button>
        </React.Fragment>
    )
}

export default UseStateBasics