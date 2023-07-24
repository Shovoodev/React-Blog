import "./settings.css"
import Sidebar from "../../sidebar/Sidebar"

export default function Settings() {
  return (
    <div className="settings">
      <div className="settingsWrapper">
        <div className="settingsTitle">
        <span className="settingsUpdateTitle">
            Update Your Account
          </span><span className="settingsDeletTitle">
            Delete Your Account</span>
        </div>
      <form className="settingsForm">
        <label> Profile Picture</label>
        <div className="settingsPP">
          <img
           src="https://cdn.wallpapersafari.com/1/17/ZMBC10.jpg"
           alt="" />
           <label htmlFor="fileInput">
           <i className="settingsPPIcon fa-solid fa-user-tie"></i>
           </label>
           <input type="file" id="fileInput" style={{display : "none"}} />
        </div>
        <label>Username</label>
      <input type="text" placeholder="Rahmann" />
      <label>Email</label>
      <input type="email" placeholder="example@example.com" />
      <label>Password</label>
      <input type="password" />
      <button className="settingsSubmit">Update</button>
      </form>
      </div>
     <Sidebar/>      
     </div>
  )
}
