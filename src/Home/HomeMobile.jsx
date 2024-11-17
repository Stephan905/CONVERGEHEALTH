import { useContext, useEffect } from "react";
import convergelogo from "../images/convergehealth.png";
import { Link } from "react-router-dom";
import "../mobile.css";
import Countdown from "../Countdown";
import { AnimationContext } from "../AnimateContext";

export default function MobileHome() {
  const { isAnimating, setIsAnimating } = useContext(AnimationContext);

  useEffect(() => {
    // Remove the 'full' class after seconds
    setTimeout(() => {
      document.querySelector(".mobile-header").classList.remove("full");
      document.querySelector(".mobile-nav").classList.remove("full");
      setIsAnimating(false);
    }, 1500);

    // Cleanup function to remove the event listener when the component unmounts
    return () => {
      // You don't need any cleanup for this specific case
    };
  }, []); // Empty dependency array means this effect runs once on mount

  const goalDate = new Date(2025, 3 - 1, 14, 12, 0); // year, month, day, hours, minutes, seconds
  console.log(goalDate.toLocaleDateString());
  console.log(goalDate.toTimeString());

  return (
    <div className="mobile">
      <div className={`mobile-header ${isAnimating && "full"}`}>
        <div className="logo">
          <Link to={"/"}>
            <img src={convergelogo} alt="Converge Health Logo" />
          </Link>
        </div>
      </div>

      <div className={`mobile-nav ${isAnimating && "full"}`}>
        <Countdown goalDate={goalDate} />
        <a href="https://submit.convergehealth.cc" target="_blank" rel="noopener noreferrer">
          <div className="mobile-button">SUBMIT ABSTRACT</div>
        </a>
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
