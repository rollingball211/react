import { useEffect } from "react";

/* hook의 규칙 1 
1. 
hook은 무조건 최상위 레벨에서만 호출해야 함
=> Hook은 컴포넌트가 렌더링 될 때마다 매번 같은 순서로 호출되어야 함 (state를 올바르게 관리하기 위해)
조건문 / 반복문 / 중첩 함수에서 실행할 수 없음. 
*/
function hookRules1(props) {
    const [name,setName] = useState("jjangsoo");

    if (name !== '') {
        useEffect( () => {
            //
        }); 
    }
}
/*
위 함수의 경우 name에 빈 값이 들어갈 경우 if 의 결과는 false가 되어 useEffect()가 실행되지 않음
=> 렌더링을 할 때 hook이 같은 순서로 실행되는 것이 아닌 결과에 따라 달라지기에 사용하면 안됨.
*/

