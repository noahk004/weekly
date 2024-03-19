import { useState } from 'react'
import './Interface.css'

import Nav from './components/nav-bar/Nav.jsx'
import Side from './components/side/Side.jsx'
import Body from './components/body/Body.jsx'

import toggleMenuLogo from '../assets/img/toggle-menu.svg'
import userProfileLogo from '../assets/img/user-profile.svg'
import weeklyLogo from '/weekly-icon.svg'


export default function Interface() {
	const [sideBarVisible, setSideBarVisible] = useState(true)
	
	function toggleSideBar() {
		setSideBarVisible(!sideBarVisible)
	}
	
	const containerClass = `interface-container ${sideBarVisible ? '' : 'fullwidth'}`

	const navProps = {
		toggleMenuLogo: toggleMenuLogo,
		userProfileLogo: userProfileLogo,
		weeklyLogo: weeklyLogo,
		setter: toggleSideBar,
	  };

	return <div className={containerClass}>
		<Nav {...navProps}/>
		{sideBarVisible && <Side />}
		<Body />
	</div>
}