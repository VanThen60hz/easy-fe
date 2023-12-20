import React, { useState } from "react";
import "./ColorBox.scss";

ColorBox.propTypes = {};

function ColorBox() {
  const [color, setColor] = useState(
    () => localStorage.getItem("box_color") || "deeppink"
  );

  const getRandomColor = () => {
    const COLOR_LIST = ["deeppink", "green", "yellow", "black", "blue"];
    const randomIndex = Math.trunc(Math.random() * 5);
    return COLOR_LIST[randomIndex];
  };

  const handleBoxClick = () => {
    const newColor = getRandomColor();
    setColor(newColor);
    localStorage.setItem("box_color", newColor);
  };

  return (
    <>
      <div
        className="color-box"
        onClick={() => handleBoxClick()}
        style={{ backgroundColor: color }}
      >
        <p>COLOR BOX</p>
      </div>
    </>
  );
}

export default ColorBox;
