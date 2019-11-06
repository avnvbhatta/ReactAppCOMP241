import React from "react"
import './Main.scss';
import logo from '.././logo.svg';
import {Link} from "react-router-dom"

function Main(){
    return(
        <div className="App">
            <header className="App-header">
                <img src={logo} className="App-logo" alt="logo" />
                <p>
                React App For COMP241
                </p>
                <Link to="/home">
                    <button className="startButton">Click To Get Started</button>
                </Link>
            </header>
        </div>
    )
}

export default Main