import React from 'react';
import Avatar from './gitPic.jpg'
import './avatar.css'

const avatar = () => {
    return (
        <div className="avatar">
            <img src={Avatar} alt="" />
        </div>
    )
}

export default avatar;