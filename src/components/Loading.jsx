import React from "react";
import logo from '../img/oval.svg';

export const Loading = () => {
    return (
        <div className="loading-logo">
            <img src={logo} alt="loading"/>
            <h1>Loading . . .</h1>
        </div>
    );
}