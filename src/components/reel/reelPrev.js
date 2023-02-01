import React from "react";

const reelPrev = ({ updateReelPos }) => {
  return (
    <button onClick={(e) => updateReelPos(e)} className="reel-ctrl reel-prev">
      prev
    </button>
  );
};

export default reelPrev;
