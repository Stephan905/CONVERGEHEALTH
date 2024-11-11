import { useState, useEffect } from "react";
import ReactPlayer from "react-player";
import convergelogo from "./images/convergehealth.png";

export default function VideoHeader() {
  const [collaped, setCollaped] = useState(false);
  const toggleHeader = () => {
    const video = document.querySelector(".video-container");
    video.classList.toggle("collapsed");
    video.classList.toggle("full")
  }

  useEffect(() => {
    let previousScrollY = 0;
    const handleWheel = (e) => {
      const currentScrollY = window.scrollY || document.documentElement.scrollTop;
      
      // Check if the user has scrolled down by more than 50 pixels
      if (currentScrollY > previousScrollY + 50) {
        console.log('User has scrolled down by more than 50 pixels');
        
        // Add your desired action here
        // For example, you could trigger a function call or update state
        toggleHeader();
      }
  
      previousScrollY = currentScrollY;
    };
  
    window.addEventListener("wheel", handleWheel);
    
    return () => {
      window.removeEventListener("wheel", handleWheel);
    };
  }, []);

  return (
    <div className="video-header">
      <div className="video-container full">
        <ReactPlayer url="https://www.youtube.com/watch?v=LXb3EKWsInQ" playing={true} muted={true} controls={false}/>
      </div>
      <a href="https://convergehealth.cc/wp-content/uploads/2024/10/CHlogoPNGC-4.png" className="logo-overlay">
        <img src={convergelogo} alt="Converge Health Logo" />
      </a>
    </div>
  );
}
