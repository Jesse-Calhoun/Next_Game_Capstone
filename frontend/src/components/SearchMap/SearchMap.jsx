import { useEffect } from "react";
import './SearchMap.css'

const SearcMap = ({ searchedLat, searchedLong }) => {
    let map;
    let google = window.google
    
    
    function initMap() {
        map = new google.maps.Map(document.getElementById("map"), 
        {center: { lat: searchedLat, lng: searchedLong },
        zoom: 10,
        });
    }
    // window.initMap = this.initMap

useEffect(()=>{
    initMap();
    }, [searchedLat])

useEffect(() =>{
    initMap();
}, [searchedLong])
return ( 
        <div id='map'>
            
        </div>
     );
}
 
export default SearcMap;

