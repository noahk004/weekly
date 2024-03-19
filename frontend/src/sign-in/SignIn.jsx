import './SignIn.css'
import { Link } from 'react-router-dom'

export default function SignIn() {
    return <div className="sign-in">
        <Link to="/" className="back">{"<"} Go back</Link>
        <div className="form-wrapper">
            <form action="" className="sign-in-form">
            <div className="form-header">Sign-In</div>
                <input className="form-field" type="text" name="user" id="user" placeholder="Username or Email"/>
                <input className="form-field" type="password" name="pass" id="pass" placeholder="Password"/>
                <a className="sign-in-option">Forgot password</a>
                <a className="sign-in-option">Don't have an account?</a>
                <Link to="/calendar" className="submit-btn">Submit</Link>
            </form>
        </div>
        
    </div>
}