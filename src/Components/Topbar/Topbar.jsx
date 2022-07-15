import React from "react";
import "./topbar.css";
import logo from "../../assets/logo.png";
import { useState } from "react";

const Topbar = () => {
  const [state, setstate] = useState("");

  const [hamburger, sethamburger] = useState(false);

  window.onscroll = function () {
    scrollfxn();
  };

  const scrollfxn = () => {
    if (window.pageYOffset >= 100) {
      // console.log("rue");
      setstate("stick");
    } else {
      setstate("");
    }
  };

  const displaymenu = () => {
    sethamburger(!hamburger);
  };

  return (
    <div className={`topbar ${state}`}>
      <div className="topbarwrapper">
        <div className="topleft">
          <span className="logo">Trainer Online</span>
        </div>
        <div className={hamburger ? `topright menulist` : "topright"}>
          <div className="home">Home</div>
          <div className="about">About</div>
          <div className="services">
            <div className="service">Services &nbsp;
            <small>
              &#9660;
              </small>
            </div>
            <div className="content">
              <a href="#">ONLINE COACHING</a>
              <a href="#">PERSONAL TRAINING</a>
              <a href="#">PRE AND POSTNATAL TRAINING</a>
            </div>
          </div>
          <div className="results">Results</div>
          <div className="contact">Contact</div>
          <div className="blog">Blog</div>
          <div>
            <i class="bx bx-x" onClick={displaymenu}></i>
          </div>
          <div className="iconbox">
            <i class="bx bxl-instagram"></i>
            <i class="bx bxl-facebook"></i>
          </div>
        </div>
        <i class="bx bx-menu" onClick={displaymenu}></i>
      </div>
    </div>
  );
};

export default Topbar;
