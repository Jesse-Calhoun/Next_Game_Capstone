import React from "react";
import SearchBar from '../../components/Searchbar/SearchBar'
import GameList from '../../components/GameList/GameList'
import SearcMap from "../../components/SearchMap/SearchMap";
import { useEffect, useState } from "react";
import { useLoadScript } from '@react-google-maps/api'
import axios from "axios";
// import './HomePage.css'

const HomePage = () => {
  const [location, setLocation] = useState('')
  const [games, setGames] = useState([])
  const [searchedLat, setSearchedLat] = useState(42.1034769)
  const [searchedLong, setSearchedLong] = useState(-72.5557675)
  const { isLoaded } = useLoadScript({
    googleMapsApiKey: 'AIzaSyAb0px8sbcowCzfrFcQL1FSTRBv8kKuUnc'
  })

  async function getResultsFromLocation(){
    let url = 'https://maps.googleapis.com/maps/api/geocode/json'
    let response = await axios.get(url, {
      params:{
        address: location,
        key: 'AIzaSyAb0px8sbcowCzfrFcQL1FSTRBv8kKuUnc'
      }
    });
    setSearchedLat(response.data.results[0].geometry.location.lat)
    setSearchedLong(response.data.results[0].geometry.location.lng)
  }
  
  async function getAllGames(){
    let url = 'http://127.0.0.1:8000/api/games/'
    let response = await axios.get(url)
    setGames(response.data)
  }

  useEffect(() =>{
    getAllGames()
  }, [])

  
  if (!isLoaded){
    return (
      <div className="container">
        <h1>Home Page for NextGame!</h1>
        <SearchBar setLocation={setLocation} getResultsFromLocation={getResultsFromLocation} location={location} />
        <div>Loading...</div>
        <GameList games={games}/>
      </div>
    );
  }
  else{
    if (games){
      return (
        <div className="container">
        <h1>Home Page for NextGame!</h1>
        <SearchBar setLocation={setLocation} getResultsFromLocation={getResultsFromLocation} location={location} />
        <SearcMap searchedLat={searchedLat} searchedLong={searchedLong} games={games} />
        <GameList games={games}/>
      </div>
    );
  }
  } return null
};

export default HomePage;

