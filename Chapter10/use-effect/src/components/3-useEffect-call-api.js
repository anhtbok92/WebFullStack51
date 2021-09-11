import React, { useState, useEffect } from "react";

const API = 'https://api.github.com/users';
const UseEffectCallApi = () => {
    const [users, setUsers] = useState([]);
    const getUsers = async () => {
        const response = await fetch(API);
        const users = await response.json();
        console.log(users);
        setUsers(users);
    };
    useEffect(() => {
        getUsers();
    }, [])
    return (
        <>
            <h3>Github Users</h3>
            <ul className={'user-list'}>
                {users.map((user) => {
                  return (
                      <li key={user.id}>
                          <div>
                              <h4>{user.login}</h4>
                              <a>Link github: {user.html_url}</a>
                          </div>
                          <img src={user.avatar_url} />
                      </li>
                  )
                })}
            </ul>
        </>
    )
}

export default UseEffectCallApi;