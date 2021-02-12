import React from "react";
import "../../styles/HomeScreen.css";
import Navigation from "../navigation/Navigation";
import Banner from '../banner/Banner'

const HomeScreen = () => {
  return (
    <div className="homeScreen">
      <Navigation />
        <Banner />
      {/** Row */}
    </div>
  );
};

export default HomeScreen;
