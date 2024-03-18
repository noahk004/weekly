import React from 'react'
import './Nav.css'

export default function Nav({ toggleMenuLogo, userProfileLogo, weeklyLogo, setter }) {
    return <div className="container">
        <div className="left">
            <button className="nav-item toggle-menu" onClick={setter}><img src={toggleMenuLogo} alt="Toggle Menu" /></button>
            <div className="nav-item"><img src={weeklyLogo} alt="Weekly Logo" /></div>
            <div className="nav-item title">Weekly</div>
        </div>
        <div className="right">
            <button className="nav-item user-profile"><img src={userProfileLogo} alt="User Profile" /></button>
        </div>
    </div>
}