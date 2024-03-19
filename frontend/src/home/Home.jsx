import './Home.css'
import { Link } from 'react-router-dom'

export default function Home() {
    return <div className='home'>
        <div className="main-title">
            It's time to get <u>organized</u>.
        </div>
        <Link to="/sign-in" className="get-started">
            Get Started
        </Link>
    </div>
}