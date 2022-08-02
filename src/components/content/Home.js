import React from "react";
import classes from "./Home.module.css";
import Indra from "../../static/indra-removebg-preview.png";

const Home = () => {
  return (
    <div className={classes.home}>
      <div className={classes["home-left"]}>
        <div className={classes.wrapper}>
          <div className={classes["home-left__title"]}>
            Hi, i'am <span>Indra Mahaarta</span>
          </div>
          <div className={classes["home-left__sub-title"]}>
            <span>Computer Science</span> Student at University of Indonesia
          </div>
          <div className={classes["home-left__moto"]}>
            I like to explore new things about software development
          </div>
          <div className={classes["home-left__button"]}>
            <button className={classes.btn}>Download CV</button>
          </div>
        </div>
      </div>
      <div className={classes["home-right"]}>
        <div className={classes.layer1}></div>
        <div className={classes.layer2}></div>
        <img className={classes.foto} src={Indra} alt="Indra Mahaarta"></img>
      </div>
    </div>
  );
};

export default Home;
