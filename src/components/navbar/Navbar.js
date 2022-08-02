import React, { useState } from "react";
import classes from "./Navbar.module.css";

const Navbar = () => {
  const [isScroll, setIsScroll] = useState(false);

  function scrollingHandler() {
    if (window.scrollY >= 30) {
      setIsScroll(true);
    } else {
      setIsScroll(false);
    }
  }

  window.addEventListener("scroll", scrollingHandler);

  return (
    <nav
      className={`${classes.navbar} ${isScroll ? classes["scroll-nav"] : ""}`}
    >
      <div
        className={`${classes.logo} ${isScroll ? classes["scroll-logo"] : ""}`}
      >
        Indra<span>mhrt</span>
      </div>
      <div
        className={
          !isScroll ? classes.menu : classes.menu + " " + classes["scroll-menu"]
        }
      >
        <ul>
          <li>
            <a href="#">Home</a>
          </li>
          <li>
            <a href="#">About Me</a>
          </li>
          <li>
            <a href="#">Project</a>
          </li>
          <li>
            <a href="#">Blog</a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
