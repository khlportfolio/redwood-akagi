import About from "./components/About"
import Contact from "./components/Contact"
import { GridBackgroundDemo } from "./components/GridBackground"
import Logo from "./components/Logo"
import Member from "./components/Member"
import Portfolio from "./components/Portfolio"

const App = () => {
  return (
    <main className="mx-4 lg:mx-10">
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