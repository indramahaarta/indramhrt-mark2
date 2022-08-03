import React from "react";
import classes from "./Project.module.css";
import Layer from '../../static/layer.png';
import ProjectList from "./ProjectList";

const Project = () => {
  return (
    <div id="project" className={classes.project}>
      <img alt="layer" className={classes.layer} src={Layer}></img>
      <div className={classes.title}>My Project</div>
      <div className={classes.content}>
        <ProjectList />
      </div>
    </div>
  );
};

export default Project;
