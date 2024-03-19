import React from 'react' 
import './App.css'
import Pdetails from './compo/Pdetails'
import FormZone from './component/FormZone'
import { BrowserRouter , Route, Routes } from 'react-router-dom'

function App() {

  return (
    <div >
      {/* <ProjectDetails /> */}
      <BrowserRouter>
      
      <Routes>
           <Route path='/abc' element={<Pdetails/>}/>
        <Route path='/' element={<FormZone/>}/>

      </Routes>
      </BrowserRouter>

      {/* <FormZone /> */}


      


    </div>
  )
}

export default App
