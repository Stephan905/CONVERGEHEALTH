import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

import convergelogo from "./images/convergehealth.png";
import { Link } from "react-router-dom";

function App() {

  return (
    <>
      <div className="header">
        <img src={convergelogo} height={"90%"} />
      </div>
      <div className="content">
        <div className="countdown">COUNTDOWN 00:00:00</div>
        <div className="intro">
          MAIN BODY TEXT GOES HERE, INTRODUCTION INTO THE CONFRENCE
        </div>
        <div className="nav">
          <Link to={"/abstract"}>
            <button className="submit-abstract">
              <div className="overlay">
                <div className="abstract-button">SUBMIT ABSTRACT</div>
              </div>
            </button>
          </Link>
          <Link to={"/about"}>
            <button className="learn-more">
              <div className="overlay">
                <div className="learn-button">LEARN MORE</div>
              </div>
            </button>
          </Link>
        </div>
      </div>
    </>
  );
}

export default App;
