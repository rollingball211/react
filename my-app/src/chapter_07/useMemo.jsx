import React,{ useMemo } from "react";

// const memoizedValue = useMemo(
//     () => {
//         return computeExpensiveValue (의존성 변수1, 의존성 변수2);
//     },
//     [의존성 변수1, 의존성 변수2]
// );

/*
의존성 배열을 넣지 않을 경우, 매 렌더링마다 함수가 실행됨
    const memoizedValue = useMemo(
() => computeExpensiveValue(a,b)));

*/

/*
의존성 배열이 빈 배열일 경우, 컴포넌트 mount 시에만 호출됨
const memoizedValue = useMemo(
() => {
    return computeExpensvieValue(a,b);
    },
    []
    ); 
*/

/*
    const memoizedCallback = useCallback (
        () => {
            dosomething(의존성 변수1, 의존성 변수2);

    ),
    [의존성 변수1 , 의존성 변수2]
);
*/

/*
const refContainer = useRef(초기값); //다시보기 
*/