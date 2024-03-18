import React from 'react'
import './Nav.css'

export default function Nav({ toggleMenuLogo, weeklyLogo, value, setter }) {
    return <div>
        <button onClick={setter}><img className="toggle-menu" src={toggleMenuLogo} alt="" /></button>
        <img className="logo" src={weeklyLogo} alt="" />
        <h1>Weekly</h1>
    </div>
}