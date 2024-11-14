import { useEffect } from "react";
import { Link } from "react-router-dom";
import convergelogo from "./images/convergehealth.png"

export default function HeaderAnim({animate, setAnimate}) {

  useEffect(() => {
    // Remove the 'full' class after 3 seconds
    if (!animate) {
      return;
    }
    setTimeout(() => {
      document.querySelector("header").classList.remove("full");
      document.querySelector(".mobile-nav").classList.remove("full");
      setAnimate(false);
    }, 3000);

    // Cleanup function to remove the event listener when the component unmounts
    return () => {
      // You don't need any cleanup for this specific case
    };
  }, [animate, setAnimate]); // Empty dependency array means this effect runs once on mount
  return (
    <div className="header full">
      <div className="logo">
        <Link to={"/"}>
          <img src={convergelogo} alt="Converge Health Logo" />
        </Link>
      </div>
    </div>
  );
}
