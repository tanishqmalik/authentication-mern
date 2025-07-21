// import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import React from 'react'
import {BrowserRouter as Router, Routes,Route} from 'react-router-dom'
import Register from './pages/Register'

function App() {
  // const [count, setCount] = useState(0)

  return (
    <>
    <Router>
      <Routes>
        <Route path="/register" element={<Register/>} ></Route>
      </Routes>
    </Router>
    </>
  )
}

export default App
