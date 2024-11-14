import React, { useEffect } from "react";
import ReactPlayer from "react-player";
import convergelogo from "./images/convergehealth.png";
import { Link } from "react-router-dom";
import "./mobile.css";
import Countdown from "./Countdown";

export default function MobileHome() {
  useEffect(() => {
    // Remove the 'full' class after 3 seconds
    setTimeout(() => {
      document.querySelector(".mobile-header").classList.remove("full");
      document.querySelector(".mobile-nav").classList.remove("full");
    }, 3000);

    // Cleanup function to remove the event listener when the component unmounts
    return () => {
      // You don't need any cleanup for this specific case
    };
  }, []); // Empty dependency array means this effect runs once on mount

  const goalDate = new Date(2025, 3-1, 14, 12,0); // year, month, day, hours, minutes, seconds
  console.log(goalDate.toLocaleDateString())
  console.log(goalDate.toTimeString())

  return (
    <div className="mobile">
      <div className="mobile-header full">
        <div className="logo">
          <Link to={"/"}>
            <img src={convergelogo} alt="Converge Health Logo" />
          </Link>
        </div>
      </div>

      <div className="mobile-nav full">
      <Countdown goalDate={goalDate} />
        <div className="mobile-button">SUBMIT ABSTRACT</div>
        <Link to={"/about"}>
          <div className="mobile-button">MORE INFORMATION</div>
        </Link>
        <div className="more-info">
          CONVERGE HEALTH is set for March 14th, 2025! Join us and witness how
          cutting-edge research in Biology, Computer Science, and Engineering
          converge in healthcare.
        </div>
      </div>
    </div>
  );
}
