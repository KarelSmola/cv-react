import React from "react";

import classes from "./Footer.module.css";

const Footer = () => {
  return (
    <div className={classes.footer}>
      <p className={classes["footer-content"]}>&copy; Karel Smola 2023</p>{" "}
    </div>
  );
};

export default Footer;
