import React from "react";
import { useInView } from "react-intersection-observer";
import classes from "./Contact.module.css";
import ContactMe from "../../static/contact-3.png";
import WA from "../../static/whatsapp.png";
import Email from "../../static/email.png";

const Contact = () => {
  const { ref: title, inView: titleInView } = useInView();
  const { ref: img, inView: imgInView } = useInView();
  const { ref: right, inView: rightInView } = useInView();

  return (
    <div id="contact" className={classes.contact}>
      <div ref={title} className={`${classes.title} ${titleInView? classes.slideup : ''}`}>Contact</div>
      <div className={classes.content}>
        <div ref={img} className={`${classes.left} ${imgInView? classes.bump : ''}`}>
          <img alt="ilustration" className={classes["contact-me"]} src={ContactMe}></img>
          <a className={classes.ref} href="https://storyset.com/web">
            Web illustrations by Storyset
          </a>
        </div>
        <div ref={right} className={`${classes.right} ${rightInView? classes.slideleft : ""}`}>
          <div className={classes.subtitle}>Interested in working with me?</div>
          <div classes={classes.summary}>Contact me on</div>
          <ul>
            <li className={classes.media}>
              <a href="https://wa.me/682147474931" className={classes["media-type"]}>
                <img alt="wa" src={WA}></img>
                WA
              </a>
            </li>
            <li className={classes.media}>
              <a href='mailto:official.indramahaarta@gmail.com' className={classes["media-type"]}>
                <img alt="email" src={Email}></img>
                Email
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Contact;
