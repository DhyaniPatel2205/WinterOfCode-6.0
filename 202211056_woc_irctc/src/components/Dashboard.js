import React from "react";
import { Link } from "react-router-dom";
import styles from "./Dashboard.module.css";

const Dashboard = () => {
    const user = JSON.parse(localStorage.getItem("user"));
  
    return (
      <div className={styles.container}>
        {user ? (
          <h1 className={styles.heading}>Hello, {user.displayName}</h1>
        ) : (
          <p className={styles.message}>Please log in to view your dashboard.</p>
        )}
      </div>
    );
  };

export default Dashboard;