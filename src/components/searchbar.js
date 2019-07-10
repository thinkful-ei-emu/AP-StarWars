import React from 'react'

function SearchBar(){


    return(
        <div>
            <form>
                <label htmlFor="search">Search for a Character: </label>
                <input type="text" name="character-search" placeholder="Chewbacca"/>
                <button type="submit">Search</button>
            </form>
        </div>
    )
}

export default SearchBar;