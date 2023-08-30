import { Link } from 'react-router-dom';
import './topbar.css'

export default function Topbar() {
  const user = false;
  return (
    <div className='top'>
        <div className='topLeft'>
        <i className="topIcon fa-brands fa-facebook"></i>
        <i className="topIcon fa-brands fa-twitter"></i>
        <i className="topIcon fa-brands fa-instagram"></i>
        </div>
        <div className='topCernter'>
          <ul className="topList">
            <li className='topListItem'>
              <Link className='link' to="/">HOME</Link>
            </li>
            <li className='topListItem'>
            <Link className='link' to="/">ABOUT</Link>
            </li>
            <li className='topListItem'>
            <Link className='link' to="/">CONTACT</Link>
            </li>
            <li className='topListItem'>
            <Link className='link' to="/write">WRITE</Link>
            </li>
            <li className='topListItem'>
            <Link className='link' to="/todolist">TO-DO-LIST</Link>
            </li>
            <li className='topListItem'>
              {user && "LOGOUT"}
            </li>
          </ul>
        </div>
        <div className='topRight'>
          {user ? (
          <img
          className='topImg'
          style={{padding : "20px"}}
           src='https://images.unsplash.com/photo-1575936123452-b67c3203c357?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80' 
          alt=""></img> )  : ( 
            <ul className='topList'>
                <li className='topListItem'>
              <Link className='link' to="/login">LOGIN</Link>
                  </li>  <li>
              <Link className='link' to="/register">REGISTER</Link>
                  </li>  
            </ul>

          )}
          <i className="topSearchIcon fa-solid fa-magnifying-glass"></i>
        </div>
    </div>
  )
}
