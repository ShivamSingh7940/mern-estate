import React from 'react'
import { BrowserRouter,Route,Routes } from 'react-router-dom';
import Home from './pages/Home';
import SignOut from './pages/SignOut';
import About from './pages/About';
import Profile from './pages/Profile';
import SignIn from './pages/SignIn';


function App() {
  return (
    <BrowserRouter>
<Routes>

  <Route path='/' element={<Home/>} />
  <Route path='/sign-in' element={<SignIn/>} />
  <Route path='/sign-out' element={<SignOut/>} />
  <Route path='/Profile' element={<Profile/>} />
  <Route path='/About' element={<About/>} />
</Routes>

    </BrowserRouter>
  )
}

export default App