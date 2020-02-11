import React from 'react'
import Navbar from '../Navbar/Navbar'
import Logo from '../Logo/Logo'
import Avatar from '../Avatar/Avatar'
import SearchBar from '../SearchBar/Searchbar'
import './header.css'


const header = () => {
    return (
        <div className="header">
            <Logo />
            <Navbar />
            <SearchBar />
            <Avatar />

        </div>
    )
}
export default header;