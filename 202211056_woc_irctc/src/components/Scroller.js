import React from "react";
import styles from "./Scroller.module.css";

const Scroller = () => {
  return (
    <div className={styles.scrollerContainer}>
      <div className={styles.scroller}>
        <p>Welcome to IRCTC! Access the best features like searching for trains and booking tickets...</p>
      </div>
    </div>
  );
};

export default Scroller;
