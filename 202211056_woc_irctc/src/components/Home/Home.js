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
    margin: '10px',
  };

  return (
    <>
    <div className={styles.container}>
    <div style={cardContainerStyle}>
    <div className="card" style={cardStyle}>
      <img src={process.env.PUBLIC_URL + '/assets/login.png'} style={{ width: '50%' }} />
      <h1>Already a registered member?</h1>
      {/* <p className="title">Already a registered member?</p> */}
      <p><button><Link to="/login">Login</Link></button></p>
    </div>
    <div className="card" style={cardStyle}>
      <img src={process.env.PUBLIC_URL + '/assets/reg.png'} style={{ width: '50%' }} />
      <h1>New to this site?</h1>
      {/* <p className="title">New to this site?</p> */}
      <p><button><Link to="/signup">Register</Link></button></p>
    </div>
    <div className="card" style={cardStyle}>
      <img src={process.env.PUBLIC_URL + '/assets/guest.png'} style={{ width: '50%' }} />
      <h1>Just here for a quick browse?</h1>
      {/* <p className="title">Just here for info?</p> */}
      <p><button><Link to="/search">Continue as a guest</Link></button></p>
    </div>
    </div>
    </div>
    </>
  );
}

export default Home;
