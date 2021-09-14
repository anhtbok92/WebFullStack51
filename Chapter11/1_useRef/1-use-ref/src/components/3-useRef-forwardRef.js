import Input from "./inputExample";
import { useEffect, useRef } from "react";
const UseForwardRef = () => {
    const inputRef = useRef(null);
    useEffect(() => {
        if (inputRef.current) {
            inputRef.current.focus();
        }
        console.log('useEffect-ref: ', inputRef);
    }, [])
    return (
        <div>
            <Input ref={inputRef} />
        </div>
    )
}

export default UseForwardRef;