import React from "react";

function Greeting (props) {
    const isLoggedIn = props.isLoggedIn;
    if (isLoggedIn) {
        return <UserGreeting />;
    }
    return <GuestGreeting />;
}

/*
props에 따라 보여지는 컴포넌트가 달라짐
*/


