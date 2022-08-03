import React from "react";
import { useInView } from "react-intersection-observer";
import classes from "./Project.module.css";
import Layer from "../../static/layer.png";
import ProjectList from "./ProjectList";

const Project = () => {
  const { ref: titleRef, inView: titleInView } = useInView();

  return (
    <div id="project" className={classes.project}>
      <img alt="layer" className={classes.layer} src={Layer}></img>
      <div
        ref={titleRef}
        className={`${classes.title} ${titleInView ? classes.slideup : ""}`}
      >
        My Project
      </div>
      <div className={classes.content}>
        <ProjectList />
      </div>
    </div>
  );
};

export default Project;
