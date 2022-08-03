import React from "react";
import classes from "./Footer.module.css";
import Layer2 from "../../static/layer2.png";

const Footer = () => {
  return (
    <div className={classes.footer}>
      <img alt="layer2" src={Layer2} className={classes.layer}></img>
      <div className={classes.content}></div>
    </div>
  );
};

export default Footer;
