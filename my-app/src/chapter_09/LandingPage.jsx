import React, { useState } from "react";
import Toolbar from "./Toolbar"; // ts ;;

function LandingPage(props) {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    
    const onClickLogin = () => {
        setIsLoggedIn(true);        
    }

    const onClickLogout = () => {
        setIsLoggedIn(false);
    };

    return (
        <div>
            <Toolbar
                isLoggedIn={isLoggedIn}
                onClickLogin={onClickLogin}
                onClickLogout={onClickLogout}
            />
            <div style ={{padding: 16}}>리액트 재밌는데 어렵다..</div>
        </div>
    );
}

export default LandingPage;