import React, { useEffect, useRef } from "react";

const UseRefBasics = () => {

    const refContainer = useRef(null);
    const refForm = useRef(null);
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('submited');
        console.log(refContainer.current.value);
    };

    useEffect(() => {
        console.log('useEffect called');
        console.log(refContainer.current);
        // focus : -> gán các thuộc tính của thẻ cho biên refContainer
        refContainer.current.focus();
    })

    return (
        <>
            <form className={'form'} onSubmit={handleSubmit} ref={refForm}>
                <div>
                    <input type='text' ref={refContainer} />
                </div>
                <button type='submit'>Submit</button>
            </form>
        </>
    )
}

export default UseRefBasics;