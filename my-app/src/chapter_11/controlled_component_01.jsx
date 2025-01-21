import { useState } from "react";

function NameForm(props){
    const [value, setValue] = useState('');

    const handleChange = (event) => {
        setValue(event.target.value); 
    }

    const handleSubmit = (event) => {
        alert("입력한 이름 "  + value);
        event.preventDefault();
    }

    return (
        <form onSubmit={handleSubmit}>
            <label>
                이름 :
                <input type="text" value={value} onChange={handleChange}/>
            </label>
            <button type="submit">제출</button>
        </form>
    )
}

/*
사용자의 이름을 입력받는 html form
value={value}  => react state에서 value값을 가져옴 -> v-model과 유사
state에 들어와있는 값이 input에 표시됨

입력값이 변경되었을 때 호출되는 onChange애서는 handleChange() 가 호출됨
변경된 값을 value라는 이름의 state로 저장함 (값이 바뀜)

event가 일어나 값이 변경되면 value값 (state) 가 변화하여 값이 바뀜
*/