import { useContext, useEffect, useState } from "react";
import { StyledBackground } from "./Styles/Background.styled";
import { AppContext } from "../Context/AppContext";

function Background({}) {
  const [particles, setParticles] = useState([]);
  const { backgroundColor, particlesCount, particlesSize, particlesColor } =
    useContext(AppContext);

  useEffect(() => {
    let particlesArray = [];

    for (let x = 0; x <= particlesCount; x++) {
      let randomYPosition = Math.floor(Math.random() * (100 - 1 + 1) + 1);
      let randomXPosition = Math.floor(Math.random() * (100 - 1 + 1) + 1);
      let randomAnimationDuration = Math.floor(
        Math.random() * (30 - 20 + 1) + 20
      );
      let randomOrbitSize = Math.floor(Math.random() * (1000 - 400 + 1) + 400);

      particlesArray.push({
        id: x,
        yPos: `${randomYPosition}%`,
        xPos: `${randomXPosition}%`,
        animationDuration: `${randomAnimationDuration}s`,
        orbitSize: `${randomOrbitSize}px`,
      });
    }

    setParticles(particlesArray);
  }, [particlesCount, particlesSize]);

  return (
    <StyledBackground backgroundColor={backgroundColor}>
      {particles.map((particle) => (
        <div
          className="particle-container"
          style={{
            top: particle.yPos,
            left: particle.xPos,
            animationDuration: particle.animationDuration,
            height: particle.orbitSize,
            width: particle.orbitSize,
          }}
          key={particle.id}
        >
          <span
            style={{
              height: `${particlesSize}px`,
              width: `${particlesSize}px`,
              backgroundColor: particlesColor,
            }}
          ></span>
        </div>
      ))}
    </StyledBackground>
  );
}

export default Background;
