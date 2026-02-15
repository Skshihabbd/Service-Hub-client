/* eslint-disable react/prop-types */
import { createContext, useState, useEffect } from "react";

export const LoadingContext = createContext();

export const LoadingProvider = ({ children }) => {
  // প্রথমবার site open হলে spinner দেখানোর জন্য true
  const [loadings, setLoadings] = useState(true);

  useEffect(() => {
    const handleLoad = () => setLoadings(false); // page fully loaded হলে hide

    window.addEventListener("load", handleLoad);

    return () => {
      window.removeEventListener("load", handleLoad);
    };
  }, []);

  return (
    <LoadingContext.Provider value={{ loadings, setLoadings }}>
      {children}
    </LoadingContext.Provider>
  );
};
