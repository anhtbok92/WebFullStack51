import React, { useState } from 'react';
import { data } from '../people'
const UseStateArray = () => {
    const [people, setPeople] = useState(data);
    const removePeople = (id) => {
        const newPeople = people.filter((person) => person.id !== id);
        setPeople(newPeople);
    }

    return (
        <React.Fragment>
            {
                people.map((person) => {
                    const { id, name } = person;
                    return (
                        <div key={id} className={'item'}>
                            <h4>{name}</h4>
                            <button onClick={() => removePeople(id)}>remove</button>
                        </div>
                    )
                })
            }
            <button className={'btn'} onClick={() => setPeople([])}>Clear all</button>
        </React.Fragment>
    )
}
export default UseStateArray;