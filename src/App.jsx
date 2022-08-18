import React from 'react'
import './App.css'
import Navbar from './components/Navbar'
import SideButton from './components/SideButton'
import Timeline from './components/Timeline'
import Profile from './components/Profile'
import Skills from './components/Skills'

function App() {

  return (
    <div className="App">
      <SideButton />
      <Profile />
      <Timeline />
      <Skills />

    </div>
  )
}

export default App
