import React, {useState} from 'react';
import './App.css';
import {ReactComponent as CarIcon} from "./images/car.svg";

function CallToAction({value, classname}) {
    return (
        <button className="cta">
            {value} <span className={`material-symbols-outlined ${classname}`}> trending_flat </span>
        </button>
    );
}

function App() {
    const [bgcolor, setBgcolor] = useState("white");
    const [Icon, setIcon] = useState("dark_mode");

    function changeMode() {
        if (bgcolor === "white") {
            setBgcolor("dark");
            setIcon("wb_sunny");
        } else {
            setBgcolor("white");
            setIcon("dark_mode");
        }

    }

    return (
        <div className={`app ${bgcolor === 'dark' ? 'dark' : ''}`}>
            <div className="header">
                <ul className="nav">
                    <li><a className="nav-item" href=" "> Insurance </a></li>
                    <li><a className="nav-item" href=" "> Reimbursements </a></li>
                    <li><a className="nav-item" href=" "> Care </a></li>
                    <li><a className="nav-item" href=" "> Service & Contact </a></li>
                </ul>
                <button className="mode" onClick={changeMode}>
                    <span className="material-symbols-outlined">
                        {Icon}
                    </span>

                </button>
            </div>

            <div className="section">
                <div className="info">
                    <h1><span>Insuring Tomorrow’s Roads Today</span> (Because AI Doesn’t Have a Driver’s License)</h1>
                    <p className="small-text">
                        AI-driven cars are transforming the way we move.
                        We’re here to pick up the pieces when your self-driving car decides it’s a stunt driver.
                    </p>
                    <CallToAction value={"See Insurance"} classname="white"/>
                </div>
                <div className="img">
                    <CarIcon alt="Towing AI car away from an accident"/>
                </div>
            </div>
<div className="help">
    <p> What can we help you with? </p>
</div>
            <div className="section">
                <div className="img">
                    <img className = "image" src="/images/driving.jpg" alt=" Man smiling and driving because he has good insurance "/>
                </div>
                <div className="info">

                    <h1> Reliable Coverage for a New Frontier - <span> When AI Takes a Wrong Turn </span></h1>
                    <p className="small-text">
                        AI-powered cars offer unprecedented potential—like driving you into a hedge when it confuses a
                        stop sign with a billboard.
                        Our specialized insurance gives you the stability you need when tech does what it does best:
                        malfunction at the worst possible moment.
                        Don’t worry, we’ve seen it all, and we’re ready.
                    </p>
                </div>
            </div>
        </div>
    );
}

export default App;
