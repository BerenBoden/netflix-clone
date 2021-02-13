import React, { useState, useEffect } from 'react'
import "../../styles/Banner.css"
import banner from '../../assets/netflixBanner.png'
import axios from '../../axios'
import requests from '../../Requests'


const Banner = () => {
    const [movie, setMovie] = useState([]);

    useEffect(() => {
        async function fetchData(){
            const request = await axios.get(requests.fetchNetflixOriginals)
            setMovie(
                request.data.results[
                    Math.floor(Math.random() * request.data.results.length -1 )
                ]
            )
            return request;
        }

        fetchData();

    }, [])

    console.log(movie)
    
    // Function that cuts string and adds ... when description is longer than 150 characters
    const truncate = (string, n) => {
        // Only return if string is avaiable, then if string.length is greater than n(150 characters) then fire string.substring function which will cut the string once at 150 characters than add ... to end of string.
        return string?.length > n ? string.substr(0, n - 1) + '...' : string;
    }

    return (
        <header className="banner" style={{ backgroundImage: `url('https://image.tmdb.org/t/p/original/${movie?.backdrop_path}')`, backgroundSize: "cover", backgroundPosition: "center center" }}>
            <div className="banner__contents">
                <h1 className="banner__title">
                    {movie?.title || movie?.name || movie?.original_name}
                </h1>
                <div className="banner__buttons">
                    <button className="banner__button">Play</button>
                    <button className="banner__button">My List</button>
                </div>
                <h1 className="banner__description">
                    {truncate(`${movie?.overview}`, 150)}
                </h1>
            </div>
            <div className="banner--fadeBottom" />
        </header>
    )
}

export default Banner