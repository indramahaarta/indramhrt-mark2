import React, { useState } from "react";
import OverlayNavbar from "../ui/OverlayNavbar";
import classes from "./Navbar.module.css";

const Navbar = (props) => {
  const [isScroll, setIsScroll] = useState(false);
  const [isNavbarActive, setIsNavbarActive] = useState(false);

  function scrollingHandler() {
    if (window.scrollY >= 10) {
      setIsScroll(true);
    } else {
      setIsScroll(false);
    }
  }

  const navbarClickHandler = () => {
    setIsNavbarActive((active) => {
      return !active;
    });
  };

  window.addEventListener("scroll", scrollingHandler);

  return (
    <React.Fragment>
      {isNavbarActive && <OverlayNavbar onClickBlog={props.onClickBlog} onClick={navbarClickHandler} />}
      <nav
        className={`${classes.navbar} ${isScroll ? classes["scroll-nav"] : ""}`}
      >
        <a className={classes.a} href="#home">
          <div
            className={`${classes.logo} ${
              isScroll ? classes["scroll-logo"] : ""
            }`}
          >
            Indra<span>mhrt</span>
          </div>
        </a>

        <div
          onClick={navbarClickHandler}
          className={`${classes["hamburger-menu"]} ${
            isNavbarActive ? classes.open : ""
          }`}
        >
          <div className={classes.line}></div>
        </div>

        <div
          className={
            !isScroll
              ? classes.menu
              : classes.menu + " " + classes["scroll-menu"]
          }
        >
          <ul>
            <li>
              <a href="#home">Home</a>
            </li>
            <li>
              <a href="#about">About Me</a>
            </li>
            <li>
              <a href="#project">Project</a>
            </li>
            <li>
              <a href="#blog" onClick={props.onClickBlog}>
                Blog
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </React.Fragment>
  );
};

export default Navbar;
