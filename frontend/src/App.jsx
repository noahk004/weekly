import { useState } from 'react'
import Nav from './components/nav-bar/nav.jsx'
import './App.css'

import toggleMenuLogo from './assets/img/toggle-menu.svg'
import weeklyLogo from '/weekly-icon.svg'

export default function App() {
	return <div>
		<Nav toggleMenuLogo={toggleMenuLogo} weeklyLogo={weeklyLogo}/>
	</div>
}