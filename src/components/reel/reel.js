import React from "react";
import { useState, useRef, useLayoutEffect, useEffect } from "react";
import Next from "./reelNext.js";
import Prev from "./reelPrev.js";
import "./reel.scss";
const Reel = (props) => {
  const reelContent = [];
  const reelPos = [];
  const [reelState, setReelState] = useState(reelPos);
  const [itemWidth, setItemWidth] = useState(0);
  const [dimensions, setDimensions] = useState({
    height: window.innerHeight,
    width: window.innerWidth,
  });
  const reelItems = document.getElementsByClassName("reel-card");
  const display = props.displayCount;
  const reelSize = props.reelLength;
  const ref = useRef(null);

  for (let i = 0; i < display; i++) {
    reelPos[i] = i;
  }
  useLayoutEffect(() => {
    setItemWidth(ref.current.offsetWidth);
    setReelTrack();
  }, []);

  useEffect(() => {
    const debouncedResize = debounce(function reelResize() {
      setDimensions({
        height: window.height,
        width: window.width,
      });
    }, 300);
    setItemWidth(ref.current.offsetWidth);
    setReelTrack();
    window.addEventListener("resize", debouncedResize);

    return () => {
      window.removeEventListener("resize", debouncedResize);
    };
  });

  function debounce(func, ms) {
    let timer;
    return (...args) => {
      clearTimeout(timer);
      timer = setTimeout(() => {
        func.apply(this, args);
      }, ms);
    };
  }

  window.addEventListener("load", () => {
    setReelTrack();
  });
  window.removeEventListener("load", () => {});

  function setReelTrack() {
    for (let i = 0; i < display; i++) {
      reelItems[reelState[i]].style.transform =
        "translateX(" + itemWidth * i * 1.06 + "px";
    }
  }

  function updateReelPos(e) {
    var newReelPos;
    try {
      if (e.target.classList.contains("reel-next")) {
        newReelPos = getNextReelPos();
        reelAnimation(newReelPos, true);
      } else if (e.target.classList.contains("reel-prev")) {
        newReelPos = getPrevReelPos();
        reelAnimation(newReelPos, false);
      }
      for (let i = 0; i < display; i++) {
        reelPos[i] = newReelPos[i];
      }
    } catch (e) {}
    setReelState(reelPos);
  }
  function getNextReelPos() {
    var nextReelPos = reelState.slice();
    var overflow = 0;
    for (let i = 0; i < display; i++) {
      if (reelState[i] + 1 > reelSize - 1) {
        nextReelPos[i] = overflow++;
        continue;
      }
      nextReelPos[i] = reelState[i] + 1;
    }
    return nextReelPos;
  }
  function getPrevReelPos() {
    var prevReelPos = reelState.slice();
    var underflow = reelSize - 1;
    for (let i = 0; i < display; i++) {
      if (reelState[i] - 1 < 0) {
        prevReelPos[i] = underflow;
        continue;
      }
      prevReelPos[i] = reelState[i] - 1;
    }
    return prevReelPos;
  }
  async function reelAnimation(newReelPos, nextOrPrev) {
    if (nextOrPrev) {
      for (let i = 0; i < display; i++) {
        reelItems[newReelPos[i]].style.transform =
          "translateX(" + itemWidth * i + "px";
      }
      reelItems[reelState[0]].classList.toggle("reel-hide");
      reelItems[reelState[0]].style.opacity = "0";
      setTimeout(
        () => reelItems[newReelPos[display - 1]].classList.toggle("reel-hide"),
        300
      );
      reelItems[newReelPos[display - 1]].style.opacity = "100";
    } else if (!nextOrPrev) {
      for (let i = display - 1; i > -1; i--) {
        reelItems[newReelPos[i]].style.transform =
          "translateX(" + itemWidth * i + "px";
      }
      reelItems[reelState[display - 1]].classList.toggle("reel-hide");
      reelItems[reelState[display - 1]].style.opacity = "0";
      setTimeout(
        () => reelItems[newReelPos[0]].classList.toggle("reel-hide"),
        300
      );
      reelItems[newReelPos[0]].style.opacity = "100";
    }
  }
  for (let i = 0; i < display; i++) {
    reelContent.push(
      <div key={props.reelInfo[i].id} ref={ref} className={"reel-card"}>
        <img
          className="reel-img"
          src={"/portfolio-app/Images/icons/" + props.reelInfo[i].src}
          alt=""
        />
        <p className="reel-item-desc">{props.reelInfo[i].itemDesc}</p>
      </div>
    );
  }
  for (let i = display; i < reelSize; i++) {
    reelContent.push(
      <div
        key={props.reelInfo[i].id}
        ref={ref}
        className={"reel-card reel-hide"}
      >
        <img
          className="reel-img"
          src={"/portfolio-app/Images/icons/" + props.reelInfo[i].src}
          alt=""
        />
        <p className="reel-item-desc">{props.reelInfo[i].itemDesc}</p>
      </div>
    );
  }
  return (
    <div className="reel">
      <Prev updateReelPos={updateReelPos} />
      <div className="reel-container">
        <div className="reel-content">{reelContent}</div>
      </div>
      <Next updateReelPos={updateReelPos} />
    </div>
  );
};

export default Reel;
