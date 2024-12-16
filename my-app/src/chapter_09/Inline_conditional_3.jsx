import React, { useState } from "react";

function LoginControl (props) {
    const [isLoggedIn , setIsLoggedIn] = useState(false);

    const handleLoginClick = () => {
        setIsLoggedIn(true);
    }

    const handleLogoutClick = () => {
        setIsLoggedIn(false);
    }

   return (
        <div>
            <Greeting isLoggedIn= {isLoggedIn} />
            {isLoggedIn 
                ? <LogoutButton onClick={handleLogoutClick} />
                : <LoginButton onClick={handleLoginClick} />
            }
        </div>
   )

}

/* prevent component's rendering */
function WarningBanner(props) {
    if (!props.warning) {
        return null;
    }

    return (
        <div>경고!</div>
    );
}