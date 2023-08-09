import { useState } from 'react'
import Profil from "./components/profil/Profil.jsx"
import About from "./components/about/About.jsx"
import Skills from "./components/skills/Skills.jsx";
import Portfolio from "./components/portfolio/Portfolio.jsx";
import Contact from "./components/contact/Contact.jsx";
import "../public/app.css"

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="app">
    <Profil />
    <About />
    <Skills />
    <Portfolio />
    <Contact />
  </div>
  )
}

export default App
