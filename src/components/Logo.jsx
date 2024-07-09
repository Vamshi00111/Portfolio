import React from "react";

const Logo = () => {
  const containerStyle = {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    fontFamily: "Arial, sans-serif",
    fontSize: "2rem",
    color: "#5a5da6",
    fontWeight: "bold",
    margin: "20px 0",
  };

  const braceStyle = {
    fontSize: "3rem",
    color: "#4b4b4b",
  };

  const textStyle = {
    margin: "0 10px",
  };

  return (
    <div style={containerStyle}>
      <span style={braceStyle}>&#123;</span>
      <span style={textStyle}>VAMSHI KRISHNA</span>
      <span style={braceStyle}>&#125;</span>
    </div>
  );
};

export default Logo;
