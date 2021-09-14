/**
 * Ví dụ
 * Khi click vào button submit 3 lần -> hiển thị cảnh báo là ko click đc nữa
 * Dùng useRef để tính số lần click vào button submit
 * Không re-render lại component
 */

import React, { useRef, useState } from "react";
const UseRefNoRender = () => {
    const [message, setMessage] = useState('');
    const sent = useRef(0);

    const sendMessage = () => {
        if (sent.current === 3) {
            return alert('Message Limited');
        }
        sent.current += 1;
    }
    return (
        <>
            <input
                className={'message'}
                value={message}
                onChange={(e) => setMessage(e.target.value)}
            />
            <button onClick={sendMessage}>Send</button>
        </>
    )
}

export default UseRefNoRender;