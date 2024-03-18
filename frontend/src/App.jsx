import { useState } from 'react'
import './App.css'

import Nav from './components/nav-bar/Nav.jsx'
import Side from './components/body/Side.jsx'
import Body from './components/body/Body.jsx'

import toggleMenuLogo from './assets/img/toggle-menu.svg'
import userProfileLogo from './assets/img/user-profile.svg'
import weeklyLogo from '/weekly-icon.svg'


export default function App() {
	const [sideBarVisible, setSideBarVisible] = useState(true)
	
	function toggleSideBar() {
		setSideBarVisible(!sideBarVisible)
	}
	
	const containerClass = `app-container ${sideBarVisible ? '' : 'fullwidth'}`

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