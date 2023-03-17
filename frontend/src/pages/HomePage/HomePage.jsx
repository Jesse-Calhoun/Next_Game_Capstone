import React from "react";
import SearchBar from '../../components/Searchbar/SearchBar'
import GameList from '../../components/GameList/GameList'
import SearcMap from "../../components/SearchMap/SearchMap";
import { useEffect, useState } from "react";
import { Marker, useLoadScript } from '@react-google-maps/api'
// import useAuth from "../../hooks/useAuth";
import axios from "axios";
// import './HomePage.css'

const HomePage = () => {
  const [location, setLocation] = useState('')
  const [gameAddress, setGameAddress] = useState(null)
  const [games, setGames] = useState([])
  const [searchedLat, setSearchedLat] = useState(42.1034769)
  const [searchedLong, setSearchedLong] = useState(-72.5557675)
  const [gameLat, setGameLat] = useState(0)
  const [gameLong, setGameLong] = useState(0)
  const markers = [{}]
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
    console.log(response.data)
    // setGameAddress(response.data.results[0])
    setSearchedLat(response.data.results[0].geometry.location.lat)
    setSearchedLong(response.data.results[0].geometry.location.lng)
  }
  
  async function getResultsFromGame(game){
    let url = 'https://maps.googleapis.com/maps/api/geocode/json'
    let response = await axios.get(url, {
      params: {
        address: game.address,
        key: 'AIzaSyAb0px8sbcowCzfrFcQL1FSTRBv8kKuUnc'
      }
    })
    // markers.push(response.data.results[0].geometry.location)
    console.log(response.data.results[0].geometry.location)
    setGameLat(response.data.results[0].geometry.location.lat)
    setGameLong(response.data.results[0].geometry.location.lng)
  }
  // console.log(markers)
  async function getAllGames(){
    let url = 'http://127.0.0.1:8000/api/games/'
    let response = await axios.get(url)
    // console.log(response.data)
    setGames(response.data)
  }
  // games.map(game => getResultsFromGame(game))
  
  // console.log(games)
  useEffect(() =>{
    getResultsFromGame(games[0])
    }, [])
    console.log()
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
    return (
      <div className="container">
        <h1>Home Page for NextGame!</h1>
        <SearchBar setLocation={setLocation} getResultsFromLocation={getResultsFromLocation} location={location} />
        <SearcMap searchedLat={searchedLat} searchedLong={searchedLong} games={games} getResultsFromGame={getResultsFromGame} gameLat={gameLat} gameLong={gameLong} markers={markers} />
        <GameList games={games}/>
      </div>
    );
  }
};

export default HomePage;

// The "user" value from this Hook contains the decoded logged in user information (username, first name, id)
// The "token" value is the JWT token that you will send in the header of any request requiring authentication
//TODO: Add an AddCars Page to add a car for a logged in user's garage
// const [user, token] = useAuth();
// const [cars, setCars] = useState([]);

// useEffect(() => {
//   const fetchCars = async () => {
//     try {
//       let response = await axios.get("http://127.0.0.1:8000/api/cars/", {
//         headers: {
//           Authorization: "Bearer " + token,
//         },
//       });
//       setCars(response.data);
//     } catch (error) {
//       console.log(error.response.data);
//     }
//   };
//   fetchCars();
// }, [token]);