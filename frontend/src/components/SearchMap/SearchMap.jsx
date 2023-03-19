import { useEffect, useMemo, useState } from "react";
import { GoogleMap, Marker,  } from "@react-google-maps/api"
import './SearchMap.css'
import GameMarker from "../GameMarker/GameMarker";
import { useNavigate } from "react-router-dom";

const SearcMap = ({ searchedLat, searchedLong, games}) => {
    const center = { lat:searchedLat, lng:searchedLong}

    return (
        <div className="map-margin">
            <GoogleMap zoom={12} center={center} mapContainerClassName='map'>
                {games.map((game)=>(
                    <GameMarker game={game}/>
                    ))}
            </GoogleMap>
        </div>
    );
}

export default SearcMap;