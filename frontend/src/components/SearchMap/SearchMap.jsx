import { useEffect } from "react";
import './SearchMap.css'

const SearcMap = () => {
    let map;
    let google = window.google
    
    
    function initMap() {
        map = new google.maps.Map(document.getElementById("map"), 
        {center: { lat: 41.5771034, lng: -73.4147061 },
        zoom: 10,
        });
    }
    // window.initMap = this.initMap

useEffect(()=>{
    initMap();
    }, [])
return ( 
        <div id='map'>
            
        </div>
     );
}
 
export default SearcMap;

