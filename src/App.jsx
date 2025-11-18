import { Routes, Route } from "react-router-dom"

import RenderHome from "./Component/Homepage/homeRender"
import RenderOffer from "./Component/choosepage/RenderOffer"
import ScrollToTop from "./Component/choosepage/scrolltop"
import RenderDoctor from "./Component/Doctor/renderdoctor"
import RenderDoctorDetail from "./Component/DoctorDetail/doctordetail"
import HospitalRender from "./Component/Hospital/hospitalrender"
import Treatment from "./Component/Treatment/treatment"
import Login from "./Component/Auth/Login"
import Signup from "./Component/Auth/Signup"
import ForgotPassword from "./Component/Auth/forgetpassword"


function App() {

  return (
    <>
    
      <ScrollToTop></ScrollToTop>
      <Routes>
        <Route path="/" element={<RenderHome></RenderHome>}></Route>
        <Route path="/offer" element={<RenderOffer></RenderOffer>}></Route>
        <Route path="/doctor" element={<RenderDoctor></RenderDoctor>}></Route>
        <Route path="/doctor/:id" element={<RenderDoctorDetail></RenderDoctorDetail>}></Route>
        <Route path="/hospital" element={<HospitalRender></HospitalRender>}></Route>
        <Route path="/treatment" element={<Treatment></Treatment>}></Route>
        <Route path="/login" element={<Login></Login>}></Route>
        <Route path="/signup" element={<Signup></Signup>}></Route>
        <Route path="/forgot-password" element ={<ForgotPassword></ForgotPassword>}></Route>
      </Routes>
  
    
    </>
  )
}

export default App