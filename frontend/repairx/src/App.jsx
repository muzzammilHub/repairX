import Header from "./components/Header"
import { BrowserRouter, Route, Routes } from "react-router-dom"
import Login from "./components/Login"
import SignUp from "./components/SignUp"
import Home from "./components/Home"
import Features from "./components/Features"
import TechnicianList from "./components/TechnicianList"
import TechnicianProfile from "./components/TechnicianProfile"
import TechnicianDetail from "./components/TechnicianDetail"

function App(){
  return (
  <BrowserRouter>
  
  <Routes>
  <Route path="/" element={<Home/>}></Route>
   <Route path="/login" element={<Login/>}></Route>
   <Route path="/signup" element={<SignUp/>}></Route>
   <Route path="/features" element={<Features/>}></Route>
   <Route path="/technicians" element={<TechnicianList/>}></Route>
   <Route path="/technician/:id" element={<TechnicianProfile/>}></Route>
   <Route path="/technicianDetail/:id" element={<TechnicianDetail/>}></Route>
   </Routes>
   </BrowserRouter>
  )
}

export default App
