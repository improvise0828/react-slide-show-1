import { useState, useRef } from "react";
import images from "./assets/images";
import "./slideshow.scss";

const SlideShow = () => {
  const [curImg, setCurImg] = useState(1);
  const frame = useRef();
  const clickHandler = () => {
    console.log(images);
  };
  const selectImgHandler = (idx) => {
    setCurImg(idx);
  };
  const nextImgHandler = (flag) => {
    if (flag === "next" && curImg + 1 < images.length) {
      setCurImg(curImg + 1);
      frame.current.classList.add("move-next");
      setTimeout(() => frame.current.classList.remove("move-next"), 100);
    } else if (flag === "prev" && curImg > 0) {
      setCurImg(curImg - 1);
      frame.current.classList.add("move-prev");
      setTimeout(() => frame.current.classList.remove("move-prev"), 100);
    }
  };
  return (
    <div className="slide-container">
      <div className="bg-frame left">
        <img
          className="bg-image"
          src={images[curImg - 1]}
          alt="후면 좌측 이미지"
          style={
            images[curImg - 1] === undefined ? { visibility: "hidden" } : {}
          }
        />
      </div>
      <div className="bg-frame right">
        <img
          className="bg-image"
          src={images[curImg + 1]}
          alt="후면 좌측 이미지"
          style={
            images[curImg + 1] === undefined ? { visibility: "hidden" } : {}
          }
        />
      </div>
      <div className="main-frame">
        {/* <div onClick={clickHandler}>click</div> */}
        <img
          className="main-image"
          ref={frame}
          src={images[curImg]}
          alt="메인 이미지"
        />
        <a className="slide-cursor next" onClick={() => nextImgHandler("next")}>
          ❯
        </a>
        <a className="slide-cursor prev" onClick={() => nextImgHandler("prev")}>
          ❮
        </a>
      </div>
      <div className="dot-container">
        {images.map((el, idx) => (
          <span
            className={curImg === idx ? "slide-dot selected" : "slide-dot"}
            onClick={() => selectImgHandler(idx)}
          ></span>
        ))}
      </div>
    </div>
  );
};

export default SlideShow;

// const MAX_IN_PAGE = 3;
// const START_PAGE = 1;
