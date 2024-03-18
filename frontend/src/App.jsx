import { useState } from 'react'
import Nav from './components/nav-bar/Nav.jsx'
import './App.css'

import toggleMenuLogo from './assets/img/toggle-menu.svg'
import userProfileLogo from './assets/img/user-profile.svg'
import weeklyLogo from '/weekly-icon.svg'


export default function App() {
	const [sideBarVisible, setSideBarVisible] = useState(true)
	
	function toggleSideBar() {
		setSideBarVisible(!sideBarVisible)
	}

	const navProps = {
		toggleMenuLogo: toggleMenuLogo,
		userProfileLogo: userProfileLogo,
		weeklyLogo: weeklyLogo,
		setter: toggleSideBar,
	  };

	return <div>
		<Nav {...navProps}/>
	</div>
}