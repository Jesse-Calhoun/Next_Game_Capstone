import React from "react";
import SearchBar from '../../components/Searchbar/SearchBar'
import GameList from '../../components/GameList/GameList'
import SearcMap from "../../components/SearchMap/SearchMap";
import { useEffect, useState } from "react";
// import useAuth from "../../hooks/useAuth";
import axios from "axios";
// import './HomePage.css'

const HomePage = () => {
  const [location, setLocation] = useState('')
  const [gameAddress, setGameAddress] = useState('')
  const [games, setGames] = useState([])
  
  async function getResultsFromLocation(){
    let url = 'https://maps.googleapis.com/maps/api/geocode/json'
    let response = await axios.get(url, {
      params:{
        address: location,
        key: 'AIzaSyAb0px8sbcowCzfrFcQL1FSTRBv8kKuUnc'
      }
    });
    // console.log(response.data)
    setGameAddress(response.data.results[0].formatted_address)
  }
  
  async function getAllGames(){
    let url = 'http://127.0.0.1:8000/api/games/'
    let response = await axios.get(url)
    // console.log(response.data)
    setGames(response.data)
  }
  // console.log(games)

  useEffect(() =>{
    getAllGames()
    // return () => {
    //   setGames([])
    // }
  }, [games])
  
  
  return (
    <div className="container">
      <h1>Home Page for NextGame!</h1>
      <SearchBar setLocation={setLocation} getResultsFromLocation={getResultsFromLocation} location={location} />
      <SearcMap/>
      <GameList games={games}/>
    </div>
  );
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