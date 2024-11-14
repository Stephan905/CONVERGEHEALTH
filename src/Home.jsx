import "./App.css";
import { Link } from "react-router-dom";
import Countdown from "./Countdown";
import StaticHeader from "./StaticHeader";
import { useEffect } from "react";
import convergelogo from "./images/convergehealth.png";

export default function Home() {
  // Goal date (you can change this as needed)
  const goalDate = new Date(2025, 3-1, 14, 12,0); // year, month, day, hours, minutes, seconds
  console.log(goalDate.toLocaleDateString());
  console.log(goalDate.toTimeString());

  useEffect(() => {
    // Remove the 'full' class after 1.5 seconds
    setTimeout(() => {
      document.querySelector(".header").classList.remove("full");
      document.querySelector(".content").classList.remove("full");
    }, 1500);

    // Cleanup function to remove the event listener when the component unmounts
    return () => {
      // You don't need any cleanup for this specific case
    };
  }, []); // Empty dependency array means this effect runs once on mount

  return (
    <div className="home">
      {/* <StaticHeader /> */}

      <div className="header full">
        <div className="logo">
          <Link to={"/"}>
            <img src={convergelogo} alt="Converge Health Logo" />
          </Link>
        </div>
      </div>
      <div className="content">
        <div className="countdown-wrapper">
          <Countdown goalDate={goalDate} />
        </div>

        <div className="intro">
          CONVERGE HEALTH is set for March 14th, 2025! Join us and witness how
          cutting-edge research in Biology, Computer Science, and Engineering
          converge in healthcare.
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
    </div>
  )
}
