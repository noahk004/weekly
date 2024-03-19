import React, { useState } from 'react'
import './Nav.css'

import Dropdown from './Dropdown.jsx'

export default function Nav({ toggleMenuLogo, userProfileLogo, weeklyLogo, setter }) {
    const [dropdownOpened, setDropdownOpened] = useState(false)
    
    function toggleDropdown() {
        setDropdownOpened(!dropdownOpened)
    }

    return <div className="nav">
        <div className="left">
            <button className="nav-item toggle-menu" onClick={setter}><img className="nav-img" draggable="false" src={toggleMenuLogo} alt="Toggle Menu" /></button>
            <div className="nav-item"><img className="nav-img" src={weeklyLogo} alt="Weekly Logo" /></div>
            <div className="nav-item title">Weekly</div>
        </div>
        <div className="right">
            <button onClick={toggleDropdown} className="nav-item user-profile"><img draggable="false" className="nav-img" src={userProfileLogo} alt="User Profile" /></button>
            <Dropdown dropdownOpen={dropdownOpened}/>
        </div>
    </div>
}