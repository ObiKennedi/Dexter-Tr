import { Navbar } from "../components/NavBar"
import { HeroSection } from "../components/HeroSection"
import { AboutSection } from "../components/AboutSection"
import { TechStackSection } from "../components/TechStackSection"
import { ContactSection } from "../components/ContactSection"
import { Footer } from "../components/Footer"


function App() {
  return (
    <>
      <Navbar />
      <main>
        <HeroSection />
        <AboutSection />
        <TechStackSection />
        <ContactSection/>
      </main>
      <Footer />
    </>
  )
}

export default App
