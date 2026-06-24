import { Routes, Route } from 'react-router-dom'
import Header from './components/Header'
import Footer from './components/Footer'
import WhatsAppButton from './components/WhatsAppButton'
import Home from './pages/Home'
import Tecnologia from './pages/Tecnologia'
import Proyectos from './pages/Proyectos'
import Impacto from './pages/Impacto'
import Reconocimientos from './pages/Reconocimientos'
import Contacto from './pages/Contacto'
import './App.css'

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/tecnologia" element={<Tecnologia />} />
        <Route path="/proyectos" element={<Proyectos />} />
        <Route path="/impacto" element={<Impacto />} />
        <Route path="/reconocimientos" element={<Reconocimientos />} />
        <Route path="/contacto" element={<Contacto />} />
      </Routes>
      <Footer />
      <WhatsAppButton />
    </>
  )
}

export default App
