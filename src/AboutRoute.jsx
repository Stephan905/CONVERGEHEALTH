import { useMediaQuery } from 'react-responsive';

import AboutMobile from './AboutMobile';
import About from './About';
import { useContext } from "react";
import { AnimationContext } from "./AnimateContext";

function AboutRoute() {
  const { setIsAnimating } = useContext(AnimationContext);
  setIsAnimating(false)
  const isMobile = useMediaQuery({ maxWidth: 768 });

  return (
    <>
      {isMobile ? (
        <AboutMobile />
      ) : (
        <About />
      )}
    </>
  );
}

export default AboutRoute;
