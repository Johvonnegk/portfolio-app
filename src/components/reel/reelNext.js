import React from "react";

const reelNext = ({ updateReelPos }) => {
  return (
    <button
      onClick={(e) => updateReelPos(e)}
      className="reel-ctrl reel-next"
    ></button>
  );
};

export default reelNext;
