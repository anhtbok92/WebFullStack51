import React from 'react';
import useCallApi from "../hooks/useCallApi";

const UserList = () => {
    // 1. Call API get danh sách của user
    const { isLoading, data } = useCallApi('https://5f3fda1244212d0016fed4db.mockapi.io/users');
    console.log('isLoading', isLoading);
    console.log('data', data);

    return (
        <>
            {isLoading && (
                <div>Loading...</div>
            )}
            {data.map((user, index) => {
              return (
                  <li key={index}>
                      Họ tên: {user.fullName} - SĐT: {user.phone}
                  </li>
              )
            })}
        </>
    )
}

export default UserList;