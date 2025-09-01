import React, { createContext, useContext, useRef } from 'react';

// Create context
const ScrollContext = createContext();

// Provider component
export const ScrollProvider = ({ children }) => {
  const JobOpeningRef = useRef(null);
  
  const scrollToJob = () => {
    JobOpeningRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <ScrollContext.Provider value={{ JobOpeningRef, scrollToJob }}>
      {children}
    </ScrollContext.Provider>
  );
};

// Custom hook to access context
export const useScroll = () => useContext(ScrollContext);
