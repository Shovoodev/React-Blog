import Header from "../header/Header.jsx"
import Sidebar from "../sidebar/Sidebar.jsx"
import Posts from "../posts/Posts.jsx"
import "./home.css"

export default function Home() {
  return (
    <>
        <Header/>
    <div className='home'>
      <Posts/>
      <Sidebar/>
    </div>
    </>
  )
}