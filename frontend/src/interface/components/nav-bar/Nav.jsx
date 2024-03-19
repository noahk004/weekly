import React from 'react'
import './Nav.css'

export default function Nav({ toggleMenuLogo, userProfileLogo, weeklyLogo, setter }) {
    return <div className="nav">
        <div className="left">
            <button className="nav-item toggle-menu" onClick={setter}><img className="nav-img" draggable="false" src={toggleMenuLogo} alt="Toggle Menu" /></button>
            <div className="nav-item"><img className="nav-img" src={weeklyLogo} alt="Weekly Logo" /></div>
            <div className="nav-item title">Weekly</div>
        </div>
        <div className="right">
            <button className="nav-item user-profile"><img draggable="false" className="nav-img" src={userProfileLogo} alt="User Profile" /></button>
        </div>
    </div>
}