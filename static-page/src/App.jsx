import React from 'react'
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import SignIn from './pages/SignIn'
import DashBoard from './pages/DashBoard'
import Employees from './pages/Employees'
import Attendance from './pages/Attendance'
import Projects from './pages/Projects'
import Jobs from './pages/Jobs'
import Documents from './pages/Documents'
import Finance from './pages/Finance'

const App = () => {
  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route path='/signin' element={<SignIn/>}/>
      <Route path='/dashboard' element={<DashBoard/>}/>
      <Route path='/employees' element={<Employees/>}/>
      <Route path='/attendance' element={<Attendance/>}/>
      <Route path='/projects' element={<Projects/>}/>
      <Route path='/jobs' element={<Jobs/>}/>
      <Route path='/documents' element={<Documents/>}/>
      <Route path='/finance' element={<Finance/>}/>
    </Routes>
    </BrowserRouter>

    </>
  )
}

export default App