import React from "react";

/*
Student 라는 배열로부터 학생 정보가 담긴 객체를 받아 학생들의 이름을 목록형태로 출력
*/

const students = [
    {
        id : 1,
        name : "JJangSoo",
    },
    {
        id : 2,
        name : "GeonHo",
    },
    {
        id : 3, 
        name : "Yoshi",
    },
    {
        id : 4, 
        name : "Sihun",
    },
];

function AttendanceBook(props) {
    return (
        <ul>
            {students.map((students) => {
                return <li key={students.id}>{students.name}</li> //vue처럼
            })}
        </ul>
    );
}


export default AttendanceBook;