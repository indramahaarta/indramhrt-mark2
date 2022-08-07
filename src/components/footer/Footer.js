import React from "react";
import classes from "./Footer.module.css";
// import Layer2 from "../../static/layer2.png";
import Love from "../../static/love.png";
import { useInView } from "react-intersection-observer";

const Footer = () => {
  const [ref, inView] = useInView();

  return (
    <div className={classes.footer} ref={ref}>
      <div className={classes.content}>
        <div className={`${classes.made} ${inView ? classes.bump : ""}`}>
          Made with Love <img src={Love} alt="Love"></img>
        </div>
      </div>
    </div>
  );
};

export default Footer;
