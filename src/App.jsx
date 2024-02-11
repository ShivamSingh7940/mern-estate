import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import SignOut from './pages/SignOut';
import About from './pages/About';
import Profile from './pages/Profile';
import Login from './pages/Login'; // Corrected import statement
import Header from './components/Header';

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/login' element={<Login />} /> 
        <Route path='/sign-out' element={<SignOut />} />
        <Route path='/profile' element={<Profile />} />
        <Route path='/about' element={<About />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App;
