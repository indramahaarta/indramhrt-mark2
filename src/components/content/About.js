import React from "react";
import { useInView } from "react-intersection-observer";
import classes from "./About.module.css";
import Frontend from "../../static/frontend.png";
import Backend from "../../static/backend.png";
import Database from "../../static/database.png";

const About = () => {
  const { ref: titleRef, inView: titleInView } = useInView();
  const { ref: subtitleRef, inView: subtitleInView } = useInView();
  const { ref: leftRef, inView: leftInView } = useInView();
  const { ref: box1Ref, inView: box1InView } = useInView();
  const { ref: box2Ref, inView: box2InView } = useInView();
  const { ref: box3Ref, inView: box3InView } = useInView();
  const { ref: lightRef, inView: lightInView } = useInView();

  return (
    <div className={classes.about}>
      <div
        ref={titleRef}
        className={`${classes.title} ${titleInView ? classes.slideup : ""}`}
      >
        About Me
      </div>
      <div className={classes.content}>
        <div
          ref={leftRef}
          className={`${classes.left} ${leftInView ? classes.bump : ""}`}
        >
          <div className={classes.one}><span>3</span>rd</div>
          <div className={classes.two}>Year Student</div>
          <div className={classes.three}>in Computer Science</div>
        </div>
        <div className={classes.right}>
          <div
            ref={subtitleRef}
            className={`${classes["sub-title"]} ${
              subtitleInView ? classes.slideup2 : ""
            }`}
          >
            Experienced in developing applications as
          </div>
          <div className={classes.position}>
            <div
              ref={box1Ref}
              className={`${classes.box} ${
                box1InView ? classes.slideleft1 : ""
              }`}
              style={{ backgroundColor: "#a267ac", color: "white" }}
            >
              <img src={Frontend} alt="frontend-icon"></img>
              <div>Front End Developer</div>
            </div>
            <div
              ref={box2Ref}
              className={`${classes.box} ${
                box2InView ? classes.slideleft2 : ""
              }`}
            >
              <img src={Backend} alt="backend-icon"></img>
              <div>Back End Developer</div>
            </div>
            <div
              ref={box3Ref}
              className={`${classes.box} ${
                box3InView ? classes.slideleft3 : ""
              }`}
            >
              <img src={Database} alt="database-icon"></img>
              <div>Database Engineer</div>
            </div>
            <div
              ref={lightRef}
              className={`${classes.dot} ${lightInView ? classes.bump2 : ""}`}
            ></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
