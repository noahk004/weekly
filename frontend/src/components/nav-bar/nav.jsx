import React from 'react'
import './nav.css'


export default function Nav({ toggleMenuLogo, weeklyLogo }) {
    return <div>
        <img src={toggleMenuLogo} alt="" />
        <img src={weeklyLogo} alt="" />
        <h1>Weekly</h1>
    </div>
}