import React from "react";
import logo from '../icon.png';

export const Loading = () => {
    return (
        <div className="main-login-div">
            <img src={logo} className="App-logo" alt="logo" />
            <h1>Loading . . .</h1>
        </div>
    );
}