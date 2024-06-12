import About from "./components/About"
import Contact from "./components/Contact"
import { GridBackgroundDemo } from "./components/GridBackground"
import Logo from "./components/Logo"
import Member from "./components/Member"
import Portfolio from "./components/Portfolio"
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from "react"

const App = () => {
  useEffect(() => {
   AOS.init(); //You can add options as per your need inside an object
  }, []);
  return (
    <main className="w-full px-4 lg:px-10">
        <GridBackgroundDemo />
        <About />
        <Portfolio />
        <Logo />
        <Member />
        <Contact />
    </main>
  )
}

export default App