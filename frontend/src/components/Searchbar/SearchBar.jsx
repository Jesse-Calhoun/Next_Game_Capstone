// import { Autocomplete, useLoadScript } from '@react-google-maps/api';
// import React, { useState } from 'react';
import './SearchBar.css'

const SearchBar = ({ setLocation, getResultsFromLocation, location }) => {
    // const { isLoaded, loadError } = useLoadScript({
    //     googleMapsApiKey: "AIzaSyD_woPSa-F66mqP750H4zMbKUCBQ3m_GaA"
    //   })
    // const [autocomplete, setAutocomplete] = useState(null);

    function handleSearch(event){
        event.preventDefault();
        getResultsFromLocation();
        setLocation('')
    }

    // if (isLoaded){
        return ( 
            <form onSubmit={handleSearch}>
                <label>Location:</label>
                {/* <Autocomplete
                    onLoad={(autocomplete) => setAutocomplete(autocomplete)}
                    onPlaceChanged={() => {
                        const place = autocomplete.getPlace();
                        setLocation(place);
                }}> */}
                    <input type='search' placeholder="Input address or location(include town/city and state to ensure a successful search)" onChange={(event) => setLocation(event.target.value)} value={location} className='search-bar'/>
                {/* </Autocomplete> */}
                <button type='submit'>Search</button>
            </form>
     );
    // } return loadError
    }
 
export default SearchBar;