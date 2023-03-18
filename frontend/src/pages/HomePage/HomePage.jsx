import React from "react";
import SearchBar from '../../components/Searchbar/SearchBar'
import GameList from '../../components/GameList/GameList'
import SearcMap from "../../components/SearchMap/SearchMap";
import { useEffect, useState } from "react";
import { useLoadScript } from '@react-google-maps/api'
// import Geocode from 'react-geocode'
// import useAuth from "../../hooks/useAuth";
import axios from "axios";
// import './HomePage.css'

const HomePage = () => {
  const [location, setLocation] = useState('')
  // const [gameAddress, setGameAddress] = useState(null)
  const [games, setGames] = useState([])
  const [searchedLat, setSearchedLat] = useState(42.1034769)
  const [searchedLong, setSearchedLong] = useState(-72.5557675)
  // const [gameLat, setGameLat] = useState(0)
  // const [gameLong, setGameLong] = useState(0)
  // const [markers, setMarkers] = useState([])
  // const markers = []
  const { isLoaded } = useLoadScript({
    googleMapsApiKey: 'AIzaSyAb0px8sbcowCzfrFcQL1FSTRBv8kKuUnc'
  })
  

  // for (let i = 0; i < games.length; i++){

  // }

  // const getResultsFromGame = (address) => {
  //   const geocoder = new window.google.maps.Geocoder();
  //   geocoder.geocode({ address }, (results, status)=>{
  //     if (status === 'OK'){
  //       setGameLat(results[0].geometry.location.lat)
  //       setGameLong(results[0].geometry.location.lng)
  //       // const { lat, lng } = results[0].geometry.location;
  //       // setMarkers([...markers, { lat, lng }]);
  //     } else{
  //       console.error(`Geocode failed: ${status}`)
  //     }
  //   })
  // }
  // console.log(gameAddress)
  async function getResultsFromLocation(){
    let url = 'https://maps.googleapis.com/maps/api/geocode/json'
    let response = await axios.get(url, {
      params:{
        address: location,
        key: 'AIzaSyAb0px8sbcowCzfrFcQL1FSTRBv8kKuUnc'
      }
    });
    // console.log(response.data)
    // setGameAddress(response.data.results[0])
    setSearchedLat(response.data.results[0].geometry.location.lat)
    setSearchedLong(response.data.results[0].geometry.location.lng)
  }
  
  // async function getResultsFromGame(address){
  //   let url = 'https://maps.googleapis.com/maps/api/geocode/json'
  //   let response = await axios.get(url, {
  //     params: {
  //       address: address,
  //       key: 'AIzaSyAb0px8sbcowCzfrFcQL1FSTRBv8kKuUnc'
  //     }
  //   })
  //   setGameLat(response.data.results[0].geometry.location.lat)
  //   setGameLong(response.data.results[0].geometry.location.lng)
  // }
  // console.log(markers)
  async function getAllGames(){
    let url = 'http://127.0.0.1:8000/api/games/'
    let response = await axios.get(url)
    // console.log(response.data)
    setGames(response.data)
  }

  // function getMarkers(){
  //   games.map(game => {
  //     getResultsFromGame(game.address)
  //     console.log(gameAddress)
  //     const marker = gameAddress.geometry.location;
  //     setMarkers([...markers, marker])
  //   })
  // }

  // useEffect(() =>{
  //   getMarkers()
  // }, [games])
    console.log(games)
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