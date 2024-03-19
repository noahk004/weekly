import './Home.css'
import { Link } from 'react-router-dom'

export default function Home() {
    return <div className='home'>
        <div className="main-title">
            It's time to get <u className='emphasize'>organized</u>.
        </div>
        <div className="caption">
            Simple, fast, reliable. Take control of your scheduling with Weekly.
        </div>
        <Link to="/sign-in" className="get-started">
            Get Started
        </Link>
    </div>
}