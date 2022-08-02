import React from "react";
import classes from "./Project.module.css";

const Project = () => {
  return (
    <div className={classes.project}>
      <div className={classes.title}>My Project</div>
      <div className={classes.content}>
        <div className={classes.card}>
            <div className={classes.right}>
                <img></img>
            </div>
            <div className={classes.left}>
                
            </div>
        </div>
      </div>
    </div>
  );
};

export default Project;
