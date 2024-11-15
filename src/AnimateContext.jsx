// src/AnimationContext.jsx

import { createContext, useState, useContext } from 'react';

export const AnimationContext = createContext();

export const AnimationProvider = ({ children }) => {
  const [isAnimating, setIsAnimating] = useState(true);

  return (
    <AnimationContext.Provider value={{ isAnimating, setIsAnimating }}>
      {children}

    </AnimationContext.Provider>
  );
};

export const useAnimation = () => useContext(AnimationContext);
