import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Home from "./components/Home/Home";
import Login from "./components/Login/Login";
import Reg from "./components/Register/Reg";
import Navbar from "./components/NavBar";

import { auth } from "./firebase/firebase";

import "./App.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Scroller from "./components/Scroller";

function App() {
  const [userName, setUserName] = useState("");

  useEffect(() => {
    auth.onAuthStateChanged((user) => {
      if (user) {
        setUserName(user.displayName);
      } else setUserName("");
    });
  }, []);

  return (
    <div className="App">
      <Header />
      <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        {/* <Route path="/about" element={<AboutUs />} /> */}
        {/* <Route path="/booklist" element={<BookList />} /> */}
        {/* <Route path="/profile" element={<Profile />} /> */}
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Reg />} />
        {/* <Route path="/payment" element={<Payment />} /> */}
      </Routes>
      </Router>
      <Scroller />
      <Footer />
    </div>
  );
}

export default App;