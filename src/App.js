import Login from "./pages/login/Login";
import Register from "./pages/register/Register";
import Settings from "./pages/settings/Settings";
import Single from "./pages/single/Single";
import Write from "./pages/single/write/Write";
import Home from "./home/Home"
import Topbar  from "./topbar/Topbar";
import { 
  BrowserRouter as Router,
  Route ,
  Link,
  Routes
 } from 'react-router-dom'
import Post from "./post/Post";
import SinglePost from "./singlePost/SinglePost";
import Posts from "./posts/Posts";
import ToDoList from "./todolists/ToDoList";

function App() {
  const user = true;
  return (
    <Router>
      <Topbar/>
      <Routes>
      <Route exact path="/" element={<Home/>}/>
      <Route exact path="/login" element={<Login/>}/>
      <Route exact path="/register" element={<Register/>}/>
      <Route exact path="/write" element={<Write/>}/>
      <Route exact path="/settings" element={<Settings/>}/>
      <Route exact path="/login" element={<Login/>}/>
      <Route exact path="/post/:postId" element={<Single/>}/>
      <Route exact path="/todolist" element={<ToDoList/>}/>
        </Routes> 
    </Router>
  );
}

export default App;
 