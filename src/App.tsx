import { BrowserRouter, Routes, Route } from "react-router-dom"

import Home from "./pages/Home"
import ListPatients from "./pages/ListPatients"
import ListDoctors from "./pages/ListDoctors"
import Error from "./pages/Error"

function App() {

  return (

      <BrowserRouter>
      

        <Routes>

          <Route path="/clinica" element={<Home />}/>

          <Route path="/listPatients" element={<ListPatients />}/>

          <Route path="/listDoctors" element={<ListDoctors />}/>

          <Route path="/createDoctors" element={<Error />}/>

          <Route path="/createPatients" element={<Error />}/>
          
          <Route path="/createAppointments" element={<Error />}/>
          
          <Route path="/listAppointments" element={<Error />}/>


        </Routes>
      </BrowserRouter>
  )
}

export default App
