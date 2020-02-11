import React from 'react'
import './search.css'

const searchBar = () => {
    return (
        <div className="search-bar">
            <input type="text" placeholder="search your places" />
            <i class="fas fa-search"></i>
            <i class="fas fa-bell"></i>
        </div>
    )
}

export default searchBar;