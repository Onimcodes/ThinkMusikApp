import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ExploreCourses from "./pages/ExploreCourses";
import Overview from "./pages/Overview";
import Sidebar from "./components/Sidebar/Sidebar"; 
import Quicktips from "./pages/Quicktips";
import Instructors from "./pages/Instructors";
import LearningPath from "./pages/LearningPath";
function App() {    
  return (
    <div className="App">
      <BrowserRouter>
            <Sidebar>
                <Routes>
                <Route path="/" element={<Overview/>}/>
                <Route path="/learningpath" element={<LearningPath/>}/>
                <Route path="/quicktips" element={<Quicktips/>}/>
                <Route path="/instructors" element={<Instructors/>}/>
                <Route path="/explorecourses" element={<ExploreCourses/>}/>
                </Routes>
            </Sidebar>
      </BrowserRouter>
    </div>
  );
}

export default App;
