import { useEffect } from "react";
import { GoogleMap, Marker, } from "@react-google-maps/api"
import './SearchMap.css'

const SearcMap = ({ searchedLat, searchedLong, games, getResultsFromGame, gameLat, gameLong, markers }) => {
    
    const center = { lat:searchedLat, lng:searchedLong}

    const marker = { lat:gameLat, lng:gameLong }
    // console.log(games)
    
    return (
        <GoogleMap zoom={10} center={center} mapContainerClassName='map'>
            {games.map((game) =>{
                // getResultsFromGame(game)
                return <Marker position={{lat: gameLat, lng:gameLong}}/>
            }
            )}
            {/* <Marker position={marker}/> */}
            
        </GoogleMap>
    );
}

export default SearcMap;


// let map;
// let google = window.google


// function initMap() {
//     let map = new google.maps.Map(document.getElementById("map"), 
//     {center: { lat: searchedLat, lng: searchedLong },
//     zoom: 10,
//     });

    // let marker = new google.maps.Marker({
    //     position: {lat:gameLat,lng:gameLong},
    //     map: map
    // })
// window.initMap = this.initMap

// useEffect(()=>{
//     initMap();
//     }, [searchedLat])

// useEffect(() =>{
//     initMap();
// }, [searchedLong])