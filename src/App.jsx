import React from 'react'
import Navbar from "../src/components/NavBar/navbar"
import Intro from "../src/components/Intro/Intro"
import About from "../src/components/Skills/About"
import Project from "./components/My-Work/Project"
import Contact from './components/Contact/Contact'
import Footer from './components/Footer/Footer'

const App = () => {
  return (
    <div>
      <Navbar />
      <Intro />
      <About id="Skills" />
      <Project id="works" />
      <Contact id="contact" />
      <Footer />
    </div>
  )
}

export default App
