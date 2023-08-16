import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ExploreCourses from "./pages/ExploreCourses";
import Overview from "./pages/Overview/Overview";
import Sidebar from "./components/Sidebar/Sidebar"; 
import Quicktips from "./pages/Quicktips";
import Instructors from "./pages/Instructors";
import LearningPath from "./pages/LearningPath";
import modalImg from '../src/assets/modal1.png'
import rocketIcon from '../src/assets/rocket.svg'
import moneyIcon from '../src/assets/moneybag.svg'
function App() {    
  return (
    <div className="App">
   
      <BrowserRouter>
            <Sidebar className='thinkmusik__sidebar'>
                <Routes>
                <Route path="/" element={<Overview/>}/>
                <Route path="/learningpath" element={<LearningPath/>}/>
                <Route path="/quicktips" element={<Quicktips/>}/>
                <Route path="/instructors" element={<Instructors/>}/>
                <Route path="/explorecourses" element={<ExploreCourses/>}/>
                <Route path="/songssheet" element={<ExploreCourses/>}/>
                <Route path="/mylist" element={<ExploreCourses/>}/>
                <Route path="/shop" element={<ExploreCourses/>}/>
                </Routes>
            </Sidebar>
      </BrowserRouter>

     
    </div>
  );
}

export default App;
