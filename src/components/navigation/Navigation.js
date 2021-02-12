import React, { useState, useEffect } from "react";
import "../../styles/Navigation.css";
import logo from "../../assets/netflixLogo.png";
import avatar from "../../assets/netflixAvatar.png";

const Navigation = () => {
  // Using state for showing specific class in navigation
  const [show, handleShow] = useState(false);
  // When window scroll goes past 100 set handleShow to true to activiate navigation__black class in Navigation.css
  const transitionNavigation = () => {
    if (window.scrollY > 100) {
      handleShow(true);
    } else {
      handleShow(false);
    }
  };

  // UseEffect hook to listen for functions
  useEffect(() => {
    window.addEventListener("scroll", transitionNavigation);
    return () => window.removeEventListener("scroll", transitionNavigation);
  }, []);

  return (
    <div className={`navigation ${show && "navigation__black"}`}>
      <div className="nav__contents">
        <img src={logo} className="navigation__logo" alt="netflix logo" />
        <img src={avatar} className="navigation__avatar" alt="netflix logo" />
      </div>
    </div>
  );
};

export default Navigation;
