import ContactUs from "../contactUs/ContactUs"
import './sidebar.css'


export default function Sidebar() {
  return (
    <div className='sidebar'>
      <div className="sidebarItem">
        <span className="sidebarTitle">ABOUT ME</span>
        <img src="https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885_1280.jpg"
         alt="" />
         <p>i am a frontend web developer . work with react , javascripts </p>
      </div>
      <div className="sidebarItem">
      <span className="sidebarTitle">CATAGORIES</span>
      <ul className="sidebarList">
        <li className="sidebarListItem">Life</li>
        <li className="sidebarListItem">Music</li>
        <li className="sidebarListItem">Style</li>
        <li className="sidebarListItem">Sports</li>
        <li className="sidebarListItem">Cinema</li>
        <li className="sidebarListItem">Teck</li>
      </ul>
      </div>
      <div className="sidebarItem">
      <span className="sidebarTitle">FOLLOW US</span>
      <div className="sidebarSocial">
        
        <i className="sidebarIcon fa-brands fa-facebook"></i>
        <i className="sidebarIcon fa-brands fa-twitter"></i>
        <i className="sidebarIcon fa-brands fa-instagram"></i>
      </div>
      </div>
      <div>
        <ContactUs/>
      </div>
    </div>
  )
}
