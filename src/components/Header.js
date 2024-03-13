import React from "react";
import TrollFace from "../images/troll-face.png"
export default function Header(){
    return(
        <nav className="header">
            <div className="header-logo">
                <img src={TrollFace} alt="face" className="header-trolly-face"/>
                <h1 className="header-title">Meme Generator</h1>
            </div>
            <h2 className="header-project">React Course - Project 3</h2>
        </nav>
    )
}