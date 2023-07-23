import './topbar.css'

export default function Topbar() {
  return (
    <div className='top'>
        <div className='topLeft'>
        <i className="topIcon fa-brands fa-facebook"></i>
        <i className="topIcon fa-brands fa-twitter"></i>
        <i className="topIcon fa-brands fa-instagram"></i>
        </div>
        <div className='topCernter'>
          <ul className="topList">
            <li className='topListItem'>Home</li>
            <li className='topListItem'>About</li>
            <li className='topListItem'>Contact</li>
            <li className='topListItem'>Write</li>
            <li className='topListItem'>Logout</li>
          </ul>
        </div>
        <div className='topRight'>
          <img
          className='topImg'
           src='https://images.unsplash.com/photo-1575936123452-b67c3203c357?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80' 
          alt=""></img>
          <i className="fa-solid fa-magnifying-glass"></i>
        </div>
    </div>
  )
}
