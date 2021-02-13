import React from "react";
import "../../styles/HomeScreen.css";
import Navigation from "../navigation/Navigation";
import Banner from "../banner/Banner";
import requests from "../../Requests";
import Row from '../row/Row'

const HomeScreen = () => {
  return (
    <div className="homeScreen">
      <Navigation />
      <Banner />
      <Row
        title="NETFLIX ORIGINALS"
        fetchUrl={requests.fetchTrending}
        isLargeRow
      />
      <Row title="Trending Now" fetchUrl={requests.fetchTopRated} />
      <Row title="Top Rated" fetchUrl={requests.fetchActionMovies} />
      <Row title="Action Movies" fetchUrl={requests.fetchComedyMovies} />
      <Row title="Comedy Movies" fetchUrl={requests.fetchComedyMovies} />
      <Row title="Horror Movies" fetchUrl={requests.fetchHorrorMovies} />
      <Row title="Romance Movies" fetchUrl={requests.fetchRomanceMovies} />
      <Row title="Documantaries" fetchUrl={requests.fetchDocumentaries} />
    </div>
  );
};

export default HomeScreen;
