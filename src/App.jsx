import './App.css'
import Header from './components/header/Header'
import Nav from './components/nav/Nav'
import About from './components/about/About'
import Experience from './components/experience/Experience'
import Service from './components/services/Service'
import Portfolio from './components/portfolio/Portfolio'
import Testimonial from './components/testimonials/Testimonial'
import Contact from './components/contacts/Contact'
import Footer from './components/footer/Footer'
import Theme from './components/theme/Theme'


function App() {
   
  return (
    <>
     <Theme/>
     <Header/>
     <Nav/>
     <About/>
     <Experience/>
     <Service/>
     <Portfolio/>
     <Testimonial/>
     <Contact/>
     <Footer/>

    </>
  )
}

export default App
