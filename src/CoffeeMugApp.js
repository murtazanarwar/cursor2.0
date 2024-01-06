import React, { useState, useEffect } from "react";
import wandPng from "./icon/wandPng.png";
import magicWandPng from "./icon/magicWandPng.gif";

const CoffeeMugApp = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isClicked, setIsClicked] = useState(false);

  useEffect(() => {
    const handleMouseMove = (e) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };

    const handleMouseClick = () => {
      setIsClicked(true);

      setTimeout(() => {
        setIsClicked(false);
      }, 1000);
    };

    document.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("click", handleMouseClick);

    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("click", handleMouseClick);
    };
  }, []);

  const mugStyle = {
    position: "absolute",
    left: `${position.x}px`,
    top: `${position.y}px`,
    cursor: isClicked ? "default" : "none",
    width: "50px",
    height: "auto",
  };

  return (
    <div className="App">
      <img
        src={isClicked ? magicWandPng : wandPng}
        alt="Coffee Mug"
        style={mugStyle}
      />
    </div>
  );
};

export default CoffeeMugApp;
