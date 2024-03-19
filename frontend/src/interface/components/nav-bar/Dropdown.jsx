import './Dropdown.css'
import { Link } from 'react-router-dom'

export default function Dropdown({ dropdownOpen }) {
    return <div className={`dropdown ${dropdownOpen ? '' : 'hidden'}`}>
        <Link className="dropdown-item">Settings</Link>
        <Link to="/sign-in" className="dropdown-item">Log out</Link>
    </div>
}