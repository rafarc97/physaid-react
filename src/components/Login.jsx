import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import logo from '../icon.png';

export const LoginButton = () => {
    const { loginWithRedirect } = useAuth0();

    return (
        <div className="main-login-div">
            <img src={logo} className="App-logo" alt="logo" />
            <button type="button" className="btn btn-success login-bottom" onClick={() => loginWithRedirect()}> Login </button>
        </div>
    );
}