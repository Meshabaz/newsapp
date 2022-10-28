import './App.css';
import HomeNav from "./components/HomeNav";
import Form from "./components/Form";
import Worldnews from "./components/Worldnews";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import React from 'react'

function App() {
  return (
    <>
    <Router>
   
      {/* <div className='container'> */}
        <Routes>
        {/* <Route exact path='/newsapp' element={<HomeNav />}></Route> */}
        <Route exact path='/' element={<><HomeNav /><Form /></>}></Route>
        <Route exact path='/worldnews' element={<><Worldnews /></>}></Route>
        </Routes>
      {/* </div> */}
    </Router>
          
  </>
  )
}

export default App


