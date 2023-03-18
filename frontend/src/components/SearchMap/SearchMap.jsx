import { useEffect, useMemo, useState } from "react";
import { GoogleMap, Marker,  } from "@react-google-maps/api"
import './SearchMap.css'
import GameMarker from "../GameMarker/GameMarker";

const SearcMap = ({ searchedLat, searchedLong, games}) => {
    const center = { lat:searchedLat, lng:searchedLong}
    console.log(games)
    // getMarkers()
    // console.log(markers)

    // const gameMarkers = games.map((game) => getResultsFromGame(game))
    // console.log(gameMarkers)
    // generateMarkers = (position: {LatLng}) =>

    // console.log(`markers: ${markers}`)
    // const marker = { lat:gameLat, lng:gameLong }
    
    // for (let i = 0; i < games.length; i++){
    //     getResultsFromGame(games[i]);
    //     (<Marker position={marker} />)
    // }
    return (
        <GoogleMap zoom={12} center={center} mapContainerClassName='map'>
            {games.map((game)=>(
                <Marker
                key={game.id}
                position={{ lat:game.lat, lng:game.lng }}
                />
            ))}
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