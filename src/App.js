
import React from 'react';
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Home from './routes/Home';
import About from './routes/About';
import Navigation from './components/Navigation';
import Detail from './routes/Detail';



function App() {
  return (
  <div className="App">
      <BrowserRouter>
      <Navigation/>
          <Routes>
              <Routes path='/' element={<home/>}></Routes>
              <Routes path='/about' element={<About/>}></Routes>
              <Routes path='/detail/:home:id' element={<Detail/>}></Routes>
          </Routes>
      </BrowserRouter>
  </div>
)}

export default App;