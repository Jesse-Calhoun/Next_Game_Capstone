import { useEffect, useMemo, useState } from "react";
import { GoogleMap, Marker,  } from "@react-google-maps/api"
import './SearchMap.css'
import GameMarker from "../GameMarker/GameMarker";

const SearcMap = ({ gameLat, gameLong, searchedLat, searchedLong, games, getResultsFromGame, markers, setMarkers, gameAddress}) => {
    const center = { lat:searchedLat, lng:searchedLong}


    async function getMarkers(){
        for (let i = 0; i<games.length;i++){
            await getResultsFromGame(games[i])
            const marker = {gameLat, gameLong}
            setMarkers([...markers, marker])
        }
        // await games.map(game => {
        //   getResultsFromGame(game.address)
        // //   console.log(gameAddress)
        //   const marker = {gameLat, gameLong}
        //   setMarkers([...markers, marker])
        // })
    }
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
        <GoogleMap zoom={10} center={center} mapContainerClassName='map'>
            {/* {gameMarkers} */}
            {/* {markers.map((marker) =>{
                getResultsFromGame(game.address)
                const marker = gameAddress.geometry.location
                set
                <Marker position={marker}/>
            }
            )} */}
            {/* <Marker position={marker}/>             */}
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