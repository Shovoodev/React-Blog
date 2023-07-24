import { Link } from "react-router-dom"
import "./register.css"

export default function Register() {
  return (
    <div className="register">
        <span className="loginTitle">
            Register
        </span>
        <form className="registerForm">
          <label > Username</label>
            <input type="text" placeholder="Enter your Username..." />
            <label > Email</label>
            <input type="text" placeholder="Enter your email..." />
            <label > Password</label>
            <input type="password" placeholder="Enter your password... " />
            <label > Confirm Password</label>
            <input type="password" placeholder="Confirm password... " />
            <button className="registerButton">Register</button>
        </form>
        <button className="registerLoginButton">
        <Link className="link" to="/login">Login</Link>
        </button>
    </div>
  )
}
