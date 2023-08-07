import { createContext, useState } from "react";

export const AppContext = createContext();

export const AppContextProvider = ({ children }) => {
  const [backgroundColor, setBackgroundColor] = useState("#2d61c8");
  const [particlesCount, setParticlesCount] = useState(30);
  const [particlesSize, setParticlesSize] = useState(10);
  const [particlesColor, setParticlesColor] = useState("#e9e2e2");

  const handleBackgroundColorChange = (e) => {
    const backgroundColorValue = e.target.value;
    setBackgroundColor(backgroundColorValue);
  };

  const handleParticlesCountChange = (e) => {
    const particlesCountValue = e.target.value;
    setParticlesCount(particlesCountValue);
  };
  const handleParticlesSizeChange = (e) => {
    const particlesSizeValue = e.target.value;
    setParticlesSize(particlesSizeValue);
  };
  const handleParticlesColorChange = (e) => {
    const particlesColorValue = e.target.value;
    setParticlesColor(particlesColorValue);
  };

  return (
    <AppContext.Provider
      value={{
        backgroundColor,
        particlesCount,
        particlesSize,
        particlesColor,
        handleBackgroundColorChange,
        handleParticlesCountChange,
        handleParticlesSizeChange,
        handleParticlesColorChange
      }}
    >
      {children}
    </AppContext.Provider>
  );
};
