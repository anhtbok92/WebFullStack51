/*
Tạo 1 trang quản lý người dùng. Có 2 chức năng cơ bản
1. Hiển thị tên người dùng từ API
2. Cho phép xóa user ra khỏi danh sách
 */
import React, {useContext, useState} from 'react';
import { data } from '../data/data'

// B1. Khởi tạo context API
const PersonContext = React.createContext();

const ContextApi = () => {
    const [people, setPeople] = useState(data);
    const removePerson = (id) => {
        setPeople((people) => {
            return people.filter((p) => p.id !== id)
        })
    }
    return (
        /* B2. Khởi tạo provider ở component Cha */
        <PersonContext.Provider value={{ removePerson, people }}>
            <h3>Learning context API</h3>
            <UserList />
        </PersonContext.Provider>
    )
}

const UserList = () => {
    /* B3. Lấy dữ liệu từ context Provider để sử dụng */
    const peopleData = useContext(PersonContext);
    console.log('peopleData', peopleData);
    return (
        <>
            {peopleData.people.map((people) => {
                return <SinglePerson key={people.id} {...people} />
            })}
        </>
    )
}

const SinglePerson = ({ id, name }) => {
    /* B3. Lấy dữ liệu từ context Provider để sử dụng */
    const { removePerson } = useContext(PersonContext);
    return (
        <div className={'person'}>
            <h4>{name}</h4>
            <button onClick={() => removePerson(id)}>Remove</button>
        </div>
    )
}

export default ContextApi;