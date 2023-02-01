import React from "react";
import { useState, useRef, useLayoutEffect, useEffect } from "react";
import Next from "./reelNext.js";
import Prev from "./reelPrev.js";
import "./reel.scss";
const Reel = (props) => {
  const reelContent = [];
  const reelPos = [];
  const [reelItemWidth, setReelItemWidth] = useState(0);
  const display = props.displayCount;
  const reelDisplay = document.getElementsByClassName("reel-active");
  const reelItems = document.getElementsByClassName("reel-card");
  const maxReelPos = reelItems.length - 1;
  const reelArray = Array.from(reelItems);
  var reelDisplayArray = Array.from(reelDisplay);
  const ref = useRef(null);
  for (let i = 0; i < display; i++) {
    reelPos[i] = i;
  }
  useLayoutEffect(() => {
    setReelItemWidth(ref.current.offsetWidth);
  }, []);

  window.addEventListener("load", (event) => {
    setReelItemWidth(ref.current.offsetWidth);
    for (var i = 0; i < display; i++) {
      reelItems[i].style.transform = "translateX(" + reelItemWidth * i + "px)";
    }
  });

  function updateReelPos(e) {
    var newReelPos;

    if (e.target.classList.contains("reel-next")) {
      newReelPos = getNextReelPos(reelPos);
      reelAnimation(newReelPos, true);
      popInAnimation(newReelPos, true);
      for (let i = 0; i < display; i++) {
        reelPos[i] = newReelPos[i];
      }
    } else if (e.target.classList.contains("reel-prev")) {
      newReelPos = getPrevReelPos(reelPos);
      reelAnimation(newReelPos, false);
      popInAnimation(newReelPos, false);
      for (let i = 0; i < display; i++) {
        reelPos[i] = newReelPos[i];
      }
      console.log(reelPos);
    }
  }

  async function reelAnimation(newReelPos, nextOrPrev) {
    if (nextOrPrev) {
      reelItems[newReelPos[display - 1]].style.left =
        reelItemWidth * display + "px";
      // for (let i = 0; i < display - 1; i++) {
      //   reelItems[newReelPos[i]].style.transform =
      //     "translateX(" + reelItemWidth * i + "px)";
      //   console.log(newReelPos[i]);
      // }
      // reelItems[newReelPos[display - 1]].style.transform =
      //   "translateX(-" + reelItemWidth + "px)";
      reelItems[newReelPos[0]].classList.toggle("reel-hide");
      reelItems[newReelPos[0]].style.opacity = "0";
    } else if (!nextOrPrev) {
      for (var i = display - 1; i > -1; i--) {
        reelItems[newReelPos[i]].style.transform =
          "translateX(" + reelItemWidth * i + "px)";
      }
      reelItems[reelPos[display - 1]].classList.toggle("reel-hide");
      reelItems[reelPos[display - 1]].style.opacity = "0";
    }
  }

  async function popInAnimation(newReelPos, nextOrPrev) {
    if (nextOrPrev) {
      reelItems[newReelPos[display - 1]].classList.toggle("reel-hide");
      // await new Promise((r) => setTimeout(r, 30));
      reelItems[newReelPos[display - 1]].style.opacity = "100";
    } else if (!nextOrPrev) {
      reelItems[newReelPos[0]].classList.toggle("reel-hide");
      // await new Promise((r) => setTimeout(r, 30));
      reelItems[newReelPos[0]].style.opacity = "100";
    }
  }
  function getNextReelPos(currentReelPos) {
    var nextReelPos = Array.from(currentReelPos);
    var overflow = 0;
    for (var i = 0; i < display; i++) {
      if (currentReelPos[i] + 1 > maxReelPos) {
        nextReelPos[i] = overflow++;
        continue;
      }
      nextReelPos[i] = currentReelPos[i] + 1;
    }

    return nextReelPos;
  }

  function getPrevReelPos(currentReelPos) {
    const nextReelPos = Array.from(currentReelPos);
    var underflow = maxReelPos;
    for (var i = 0; i < display; i++) {
      if (reelPos[i] - 1 < 0) {
        nextReelPos[i] = underflow;
        continue;
      }
      nextReelPos[i] = currentReelPos[i] - 1;
    }
    return nextReelPos;
  }

  for (let i = 0; i < display; i++) {
    reelContent.push(
      <div ref={ref} className={"reel-card reel-active " + i}>
        <img
          className="reel-img"
          src={"/Images/icons/" + props.srcs[i]}
          alt=""
        />
      </div>
    );
  }

  for (let i = display; i < props.reelLength; i++) {
    reelContent.push(
      <div className={"reel-card reel-hide " + i}>
        <img
          className="reel-img"
          src={"/Images/icons/" + props.srcs[i]}
          alt=""
        />
      </div>
    );
  }

  return (
    <div className="reel">
      <Prev updateReelPos={updateReelPos} />
      <div className="reel-content">{reelContent}</div>
      <Next updateReelPos={updateReelPos} />
    </div>
  );
};

export default Reel;
