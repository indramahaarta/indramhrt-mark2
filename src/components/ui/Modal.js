import React from "react";
import ReactDOM from "react-dom";
import classes from "./Modal.module.css";

const Modal = (props) => {
  const element = document.getElementById("modal");

  return (
    <React.Fragment>
      {ReactDOM.createPortal(
        <div className={classes.modal}>{props.message}</div>,
        element
      )}
    </React.Fragment>
  );
};

export default Modal;
