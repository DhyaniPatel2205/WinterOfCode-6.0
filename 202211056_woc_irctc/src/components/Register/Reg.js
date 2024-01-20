import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { auth } from "../../firebase/firebase";
import InputControl from "../InputControl/InputControl";
import styles from "./Register.module.css";

function Reg() {
  const navigate = useNavigate();
  const [values, setValues] = useState({
    name: "",
    email: "",
    pass: "",
  });
  const [errorMsg, setErrorMsg] = useState("");
  const [submitButtonDisabled, setSubmitButtonDisabled] = useState(false);

  const handleSubmission = () => {
    if (!values.name || !values.email || !values.pass) {
      setErrorMsg("Please fill in all the details!");
      return;
    }
    setErrorMsg("");

    setSubmitButtonDisabled(true);
    createUserWithEmailAndPassword(auth, values.email, values.pass)
      .then(async (userCredential) => {
        const user = userCredential.user;
        await updateProfile(user, {
          displayName: values.name,
        });
        setSubmitButtonDisabled(false);
        window.alert("User Successfully Registered");
        navigate("/login");
      })
      .catch((err) => {
        setSubmitButtonDisabled(false);
        switch (err.code) {
          case "auth/email-already-in-use":
            setErrorMsg("Email already registered");
            break;
          case "auth/weak-password":
            setErrorMsg("Password should contain at least 6 characters");
            break;
          case "auth/invalid-email":
            setErrorMsg("Invalid email address");
            break;
          default:
            setErrorMsg("Failed to register! Please try again.");
        }
      });
  };

  return (
    <div>
    <div className={styles.container}>
      <div className={styles.innerBox}>
        <h1 className={styles.heading}>Register</h1>
        <InputControl
          label="Name"
          placeholder="Enter your name"
          onChange={(event) =>
            setValues((prev) => ({ ...prev, name: event.target.value }))
          }
        />
        <InputControl
          label="Email"
          placeholder="Enter email address"
          onChange={(event) =>
            setValues((prev) => ({ ...prev, email: event.target.value }))
          }
        />
        <InputControl
          label="Password"
          placeholder="Enter password"
          type="password"
          onChange={(event) =>
            setValues((prev) => ({ ...prev, pass: event.target.value }))
          }
        />

        <div className={styles.footer}>
          <b className={styles.error}>{errorMsg}</b>
          <button onClick={handleSubmission} disabled={submitButtonDisabled}>
            Signup
          </button>
          <p>
            Already have an account?{" "}
            <span>
              <Link to="/login">Login</Link>
            </span>
          </p>
        </div>
      </div>
    </div>
    </div>
  );
}

export default Reg;