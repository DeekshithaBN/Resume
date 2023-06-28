
import Home from "./Home/Home";
import SIGN_in from "./Home/SIGN_in";
import Resume from "./Resume/my_resume";
import MyResume from "./Resume/my_resume";
import Navbar from "./Resume/navbar_resume";
import Academic_info from "./Resume/pages/Academic_info";
import Skills from "./Resume/pages/Skills";
import Others from "./Resume/pages/others";
import pinfo from "./Resume/pages/personal";
import Menu from "./core/Menu/Menu";
import MyProfile from "./screens/MyProfile/MyProfile";
import RegisteredEvents from "./screens/RegisteredEvents/RegisteredEvents";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Myresume1 from "./Resume/my_resume1";
function App() {
  return (
  
     <div>
      
  
  {/* <SIGN_in/> */}
      
      
      <Router>
      <Navbar/>
    <Routes>

      <Route path='/SIGN_in' exact Component={SIGN_in}/>
      <Route path="/Academic_info" Component={Academic_info}/>
      <Route path="/Skills" Component={Skills}/>
      <Route path="/others" Component={Others}/>
      <Route path="/my_resume1" Component={Myresume1}/>
      <Route path="/index" Component={Navbar}/>
      
      
    </Routes>
  </Router> 

     {/* <Router>
      
    <Routes>
     <Route path="/index" Component={Navbar}/>
       <Route path='/home' Component={Home}/>
     <Route path='index/my_resume' exact Component={MyResume}/>
     <Route path="/Menu" Component={Menu}/>
      
      </Routes>
    </Router> */}
      
      </div>

  )
}

export default App;