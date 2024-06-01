import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import HeaderComponent from './components/HeaderComponent'
import ListEmployeeComponent from './components/ListEmployeeComponent'
import FooterComponent from './components/FooterComponent'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import EmployeeComponent from './components/EmployeeComponent'
function App() {
  

  return (
    <>
      <BrowserRouter>
        <HeaderComponent/> 
        <Routes>
       
            {/* // https://localhost:3001*/}
            <Route path='/' element={ <ListEmployeeComponent />}> </Route>
            {/* // https://localhost:3001/employees */}
            <Route path='/employees' element={ <ListEmployeeComponent />}>  </Route>
            {/* // https://localhost:3001/add-employee*/}
          <Route path='/add-employee' element={<EmployeeComponent />} ></Route>
              {/* // https://localhost:3001/edit-employee/1 */}
              <Route path ='/edit-employee/:id' element = { <EmployeeComponent /> } ></Route>

        </Routes> 
        <FooterComponent />
  </BrowserRouter>
    </>
  )
}

export default App
