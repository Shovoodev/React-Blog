import ContactUs from "../contactUs/ContactUs"
import './sidebar.css'


export default function Sidebar() {
  return (
    <div className='sidebar'>
      <div className="sidebarItem">
        <span className="sidebarTitle">ABOUT ME</span>
         <p className="about-me">Hello, I'm toukir islam shovo, a frontend developer passionate about crafting engaging digital experiences. Proficient in JavaScript, framework like react and next js  . I bring designs to life while ensuring seamless functionality across devices. My grasp of backend basics, including databases and APIs, adds depth to my skills.
</p>
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
