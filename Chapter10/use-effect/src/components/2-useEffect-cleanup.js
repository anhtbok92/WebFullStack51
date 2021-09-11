import React, { useEffect, useState } from "react";

const UseEffectCleanup = () => {
    const [size, setSize] = useState(window.innerWidth);

    const checkSize = () => {
        setSize(window.innerWidth);
    }
    useEffect(() => {
        console.log('call UseEffect');
        window.addEventListener('resize', checkSize);
        return () => {
            console.log('clean up');
            window.removeEventListener('resize', checkSize);
        }
    })
    return (
        <>
            <h1>Window</h1>
            <h2>{size} PX</h2>
        </>
    )
}

export default UseEffectCleanup;