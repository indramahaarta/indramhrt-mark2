import React, { useState } from "react";
import { useInView } from "react-intersection-observer";
import classes from "./Home.module.css";
import Indra from "../../static/indra-removebg-preview.png";
import Download from "../../static/download.png";
import IndraResume from "../../static/indraresume.pdf";

const Home = (props) => {
  const [isHoverBtn, setIsHoverBtn] = useState(false);
  const { ref: leftRef, inView: leftInView } = useInView();
  const { ref: rightRef, inView: rightInView } = useInView();

  const hoverOnHandler = () => {
    setIsHoverBtn(true);
  };

  const hoverOffHander = () => {
    setIsHoverBtn(false);
  };

  return (
    <div id="home" className={classes.home}>
      <div
        ref={leftRef}
        className={`{$classes["home-left"]} ${
          leftInView ? classes.animateleft : ""
        }`}
        id="left"
      >
        <div className={classes.wrapper}>
          <div className={classes["home-left__title"]}>
            Hi, i'm <span>Indra Mahakwasa</span>
          </div>
          <div className={classes["home-left__title"]}>
            Hi, i'm <span>Indra Mahakwasa</span>
          </div>
          <div className={classes["home-left__title"]}>
            Hi, i'm <span>Indra Mahakwasa</span>
          </div>
          <div className={classes["home-left__sub-title"]}>
            <span>Computer Science</span> Student at University of Indonesia
          </div>
          <div className={classes["home-left__moto"]}>
            I like to explore new things about software development
          </div>
          <div className={classes["home-left__button"]}>
            <a href={IndraResume} download>
              <button
                className={classes.btn}
                onMouseOver={hoverOnHandler}
                onMouseOut={hoverOffHander}
                onClick={props.onDownload}
              >
                {!isHoverBtn && "Download CV"}
                {isHoverBtn && <img alt="download" src={Download}></img>}
              </button>
            </a>
          </div>
        </div>
      </div>
      <div className={classes["home-right"]} ref={rightRef}>
        <div
          className={`${classes.layer1} ${rightInView ? classes.bump : ""}`}
        ></div>
        <div
          className={`${classes.layer2} ${rightInView ? classes.bump : ""}`}
        ></div>
        <img
          className={`${classes.foto} ${rightInView ? classes.blowup : ""}`}
          src={Indra}
          alt="Indra Mahaarta"
        ></img>
      </div>
    </div>
  );
};

export default Home;
