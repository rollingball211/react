import React, {useState, useEffect} from "react";
import useCounter from "./useCounter";

const MAX_CAPACITY = 10;

function Accomodate(props) {
    const [isFull, setIsFull] = useState(false); //초기값 지정
    const [count , increaseCount , decreaseCount] = useCounter(0);

    useEffect(() => {
        console.log("=====================");
        console.log("useEffect() is called!");
        console.log(`isFull :${isFull}`);
    });

    useEffect(() => {
        setIsFull(count >= MAX_CAPACITY);
        console.log (`Current count value : ${count}`);
    }, {count});

    return (
        <div style = {{ padding : 16}}>
            <p>{`총 ${count}명 수용했습니다.`}</p>
            
            <button onClick = {increaseCount} disabled={isFull}>
                입장
            </button>
            <button onClick = {decreaseCount}> 퇴장 </button>

            {isFull && <p style = { {color : "red" }}> 정원이 초과되었습니다.</p>}
        </div>
    );
}

export default Accomodate;

/*
하나는 의존성 배열이 없는 상태이고 하나는 있는 상태
두개의 hook 전부 컴포넌트가 마운트 된 직후에 호출되며 
의존성 배열이 없는 useEffect Hook은 컴포넌트가 업데이트 될 때마다 호출됨
있는 useEffectHook()은 Count값이 바뀔때마다 호출되는데 , 이때 용량이 가득 찼는지 아닌지의 상태를
isFull이라는 state에 저장함.

*/