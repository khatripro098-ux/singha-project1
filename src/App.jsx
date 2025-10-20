import { Routes, Route } from "react-router-dom"


import RenderHome from "./Component/Homepage/homeRender"
import RenderOffer from "./Component/choosepage/RenderOffer"
import ScrollToTop from "./Component/choosepage/scrolltop"


function App() {

  return (
    <>
    
      <ScrollToTop></ScrollToTop>
      <Routes>
        <Route path="/" element={<RenderHome></RenderHome>}> </Route>
        <Route path="/offer" element={<RenderOffer></RenderOffer>}></Route>
      </Routes>
  
    
    </>
  )
}

export default App
