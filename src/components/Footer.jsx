import { Link } from 'react-router-dom'
import './Footer.css'

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-logo">
          <Link to="/">
            <img src="/logo_rtb_crop.png" alt="RTB Bio-Jardines" />
          </Link>
        </div>
        
        <div className="footer-links">
          <Link to="/">Inicio</Link>
          <Link to="/tecnologia">Tecnología</Link>
          <Link to="/proyectos">Proyectos</Link>
          <Link to="/impacto">Impacto</Link>
          <Link to="/reconocimientos">Reconocimientos</Link>
          <Link to="/contacto">Contacto</Link>
        </div>
        
        <p className="footer-copy">
          © 2024 RTB Bio-Jardines Eco-Tecnología. Todos los derechos reservados.
        </p>
      </div>
    </footer>
  )
}

export default Footer
