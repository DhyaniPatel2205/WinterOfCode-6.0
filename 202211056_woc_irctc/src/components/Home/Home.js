import React from "react";
import { Link } from "react-router-dom";

import styles from "./Home.module.css";

function Home(props) {
  const cardContainerStyle = {
    display: 'flex',
    justifyContent: 'space-between',
  };

  const cardStyle = {
    width: '30%',
    margin: '10px'
  };

  return (
    <>
    <div className={styles.container}>
    <div style={cardContainerStyle}>
    <div className={styles.card} style={cardStyle}>
      <img src={process.env.PUBLIC_URL + '/assets/login.png'} style={{ width: '50%' }} />
      <h2>Already a registered member?</h2>
      {/* <p className="title">Already a registered member?</p> */}
      <p><button><Link to="/login">Login</Link></button></p>
    </div>
    <div className={styles.card} style={cardStyle}>
      <img src={process.env.PUBLIC_URL + '/assets/reg.png'} style={{ width: '50%' }} />
      <h2>New to this site?</h2>
      {/* <p className="title">New to this site?</p> */}
      <p><button><Link to="/signup">Register</Link></button></p>
    </div>
    <div className={styles.card} style={cardStyle}>
      <img src={process.env.PUBLIC_URL + '/assets/guest.png'} style={{ width: '50%' }} />
      <h2>Just here for a quick browse?</h2>
      {/* <p className="title">Just here for info?</p> */}
      <p><button><Link to="/search">Continue as a guest</Link></button></p>
    </div>
    </div>
    </div>
    </>
  );
}

export default Home;
