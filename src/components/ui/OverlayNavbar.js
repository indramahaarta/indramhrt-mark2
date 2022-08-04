import React from "react";
import ReactDOM from "react-dom";
import classes from "./OverlayNavbar.module.css";

const OverlayNavbar = (props) => {
  const element = document.getElementById("overlay");

  return (
    <React.Fragment>
      {ReactDOM.createPortal(
        <div onClick={props.onClick} className={classes.overlay}>
          <ul>
            <li><a href="#home">Home</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#project">Project</a></li>
            <li><a onClick={props.onClickBlog} href="#">Blog</a></li>
          </ul>
        </div>,
        element
      )}
    </React.Fragment>
  );
};

export default OverlayNavbar;
