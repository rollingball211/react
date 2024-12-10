import React,{ useState } from "react";

function useCounter (initialValue) {
    const [count, setCount] = useState(initialValue); //초기값 설정?

    const increaseCount = () => setCount((count) => count + 1);
    const decreaseCount = () => setCount((count) => Math.max(count - 1, 0));

    return [count, increaseCount, decreaseCount];


}

export default useCounter;

//count 증가 및 감소 사용