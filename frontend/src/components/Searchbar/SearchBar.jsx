import React from 'react';
import './SearchBar.css'

const SearchBar = ({ setLocation, getResultsFromLocation, location }) => {


    function handleSearch(event){
        event.preventDefault();
        getResultsFromLocation();
    }

    return ( 
        <form onSubmit={handleSearch}>
            <input type='search' placeholder="Input address or location(include town and state to be precise)" onChange={(event) => setLocation(event.target.value)} value={location} className='search-bar'/>
            <button type='submit'>Search</button>
        </form>
     );
}
 
export default SearchBar;