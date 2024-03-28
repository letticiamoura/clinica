import { BrowserRouter, Routes, Route } from "react-router-dom"
import Home from "./pages/Home"
import ListPatients from "./pages/ListPatients"
import ListDoctors from "./pages/ListDoctors"

function App() {

  return (

      <BrowserRouter>

        <Routes>

          <Route path="/" element={<Home />}/>

          <Route path="/listPatients" element={<ListPatients />}/>

          <Route path="/listDoctors" element={<ListDoctors />}/>

        </Routes>
      </BrowserRouter>
  )
}

export default App
