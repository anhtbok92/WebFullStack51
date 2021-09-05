import React from 'react';

const UseStateObject = () => {
    const [person, setPerson] = React.useState({
        name: 'Tuan Anh',
        age: '20',
        message: 'Hello everyone',
    });

    const changePersonMessage = () => {
        setPerson({ ...person, message: 'Hello world' })
    }

    return (
        <>
            <h3>{person.name}</h3>
            <h3>{person.age}</h3>
            <h3>{person.message}</h3>
            <button className={'btn'} onClick={changePersonMessage}>Change message</button>
        </>
    )
}

export default UseStateObject;