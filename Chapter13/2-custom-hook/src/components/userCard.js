import React from 'react';
import useCallApi from "../hooks/useCallApi";

const UserCard = () => {
    // 1. Call API get thông tin chi tiết cua user
    const { isLoading, data } = useCallApi('https://5f3fda1244212d0016fed4db.mockapi.io/users/1');
    // console.log('isLoading', isLoading);
    // console.log('data', data);

    return (
        <>
            {isLoading && (
                <div>Loading...</div>
            )}
            {data && (
                <div>
                    <h2>Thông tin chi tiết của user</h2>
                    <p>Họ Tên: {data.fullName}</p>
                    <p>Tuổi: {data.age}</p>
                    <p>Địa chỉ: {data.address}</p>
                    <p>Số điện thoại: {data.phone}</p>
                </div>
            )}
            {!data && (
                <div>Không thể lấy thông tin user</div>
            )}
        </>
    )
}

export default UserCard;