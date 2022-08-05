import React, { useState } from "react";
import { useInView } from "react-intersection-observer";
import classes from "./Project.module.css";
import Layer from "../../static/layer.png";
import ProjectList from "./ProjectList";

const Project = () => {
  const { ref: titleRef, inView: titleInView } = useInView();
  const { ref: btnRef, inView: btnInView } = useInView();
  const [isFullProjectoaded, setIsFullProjectLoaded] = useState(false);

  function setProjectView() {
    setIsFullProjectLoaded((state) => !state);
  }

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
        <ProjectList isFullProjectoaded={isFullProjectoaded}
          setProjectView={setProjectView} />
      </div>
      <div>
        <button
        className={`${classes.showProjectView} ${btnInView? classes.bump : ''}`}
        onClick={setProjectView}
        ref={btnRef}
        >
          {isFullProjectoaded ? "Show Less" : "Show More"}
        </button>
      </div>
    </div>
  );
};

export default Project;
