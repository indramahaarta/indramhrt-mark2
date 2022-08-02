import React from "react";
import classes from "./About.module.css";
import Frontend from "../../static/frontend.png";
import Backend from "../../static/backend.png";
import Database from "../../static/database.png";

const About = () => {
  return (
    <div className={classes.about}>
      <div className={classes.title}>About Me</div>
      <div className={classes.content}>
        <div className={classes.left}>
          <div className={classes.one}>3rd</div>
          <div className={classes.two}>Years Student</div>
          <div className={classes.three}>in Computer Science</div>
        </div>
        <div className={classes.right}>
          <div className={classes["sub-title"]}>
            Experienced in developing applications as
          </div>
          <div className={classes.position}>
            <div
              className={classes.box}
              style={{ backgroundColor: "#a267ac", color: "white" }}
            >
              <img src={Frontend} alt="frontend-icon"></img>
              <div>Front End Developer</div>
            </div>
            <div className={classes.box}>
              <img src={Backend} alt="backend-icon"></img>
              <div>Back End Developer</div>
            </div>
            <div className={classes.box}>
              <img src={Database} alt="database-icon"></img>
              <div>Database Engineer</div>
            </div>
            <div className={classes.dot}></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
