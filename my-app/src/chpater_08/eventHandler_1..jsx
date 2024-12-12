import React, { useState } from "react";

function Toggle(props) {
    const [isToggle , setIsToggleOn] = useState(true);


    // //방법 1 . 함수 안에 함수로 정의하기
    function handleCilck() {
        setIsToggleOn ((IsToggleOn) => !IsToggleOn);
    }
    
    //방법 2. arrow function  
    
    const handleCilck1 = () => {
        setIsToggleOn ((IsToggleOn) => !IsToggleOn);
    }

    return (
        <button onClick={handleCilck}> 
            {IsToggleOn ? "켜짐" : "꺼짐"} 
        </button>
    );

    //onClick()에 곧바로 정의한 이벤트 핸들러 넘기기.
}