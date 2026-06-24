import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import './Home.css'

function Home() {
  useEffect(() => {
    const observerOptions = {
      threshold: 0.15,
      rootMargin: '0px 0px -80px 0px'
    }

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-in')
          observer.unobserve(entry.target)
        }
      })
    }, observerOptions)

    document.querySelectorAll('.feature-card, .project-card').forEach(el => {
      observer.observe(el)
    })

    return () => observer.disconnect()
  }, [])

  return (
    <main className="home">
      {/* Hero Section */}
      <section className="hero">
        <div className="hero-container">
          <div className="hero-content">
            <p className="hero-subtitle">TRANSFORMAMOS EL AGUA USADA/RESIDUAL</p>
            <h1 className="hero-title">
              <span className="text-green">RECICLARTE</span>
              <span className="text-gold">TRATAR</span>
              <span className="text-green">BIOARQUITECTURA</span>
            </h1>
            <p className="hero-description">
              Diseñamos e implementamos soluciones ecológicas
              para el tratamiento y reutilización del agua usada/residual
              a través de Bio-Jardines y Bioarquitectura.
            </p>
            <div className="hero-buttons">
              <Link to="/proyectos" className="btn btn-secondary">
                Ver proyectos <span>›</span>
              </Link>
              <Link to="/tecnologia" className="btn btn-outline">
                Conocer tecnología <span>›</span>
              </Link>
            </div>
          </div>
          <div className="hero-image">
            <img src="/hero_rtb_imagen.png" alt="Carlos Alberto Sarzosa - RTB Bio-Jardines" />
            <div className="spiral-watermark"></div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="features">
        <div className="features-container">
          <div className="feature-card">
            <div className="feature-icon">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M12 2.69l5.66 5.66a8 8 0 1 1-11.31 0z"/>
              </svg>
            </div>
            <h3>AGUA USADA/RESIDUAL COMO RECURSO</h3>
            <p>Transformamos un problema ambiental en una oportunidad para la vida.</p>
          </div>
          
          <div className="feature-card">
            <div className="feature-icon">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M12 22c4-4 8-7.5 8-12a8 8 0 10-16 0c0 4.5 4 8 8 12z"/>
                <circle cx="12" cy="10" r="3"/>
              </svg>
            </div>
            <h3>SOLUCIONES NATURALES</h3>
            <p>Usamos humedales y bio-jardines para depurar y reutilizar el agua de forma natural y eficiente.</p>
          </div>
          
          <div className="feature-card">
            <div className="feature-icon">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M12 2L2 7l10 5 10-5-10-5z"/>
                <path d="M2 17l10 5 10-5"/>
                <path d="M2 12l10 5 10-5"/>
              </svg>
            </div>
            <h3>TECNOLOGÍA VERDE</h3>
            <p>Sistemas sostenibles que mejoran la calidad de vida en comunidades y hogares.</p>
          </div>
          
          <div className="feature-card">
            <div className="feature-icon">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2z"/>
                <polyline points="9,22 9,12 15,12 15,22"/>
              </svg>
            </div>
            <h3>BIOARQUITECTURA</h3>
            <p>Diseñamos espacios vivos que integran agua, vegetación y arquitectura en armonía.</p>
          </div>
        </div>
      </section>

      {/* Impact Preview */}
      <section className="impact-preview">
        <div className="impact-image-container">
          <img src="/rtb_82_por_ciento.png" alt="El Problema - 82% de enfermedades por mal manejo de excretas" />
        </div>
        <div className="impact-cta">
          <Link to="/impacto" className="btn btn-outline-light">
            Ver más sobre el impacto <span>›</span>
          </Link>
        </div>
      </section>

      {/* Projects Preview */}
      <section className="projects-preview">
        <div className="projects-header">
          <h2>PROYECTOS DESTACADOS</h2>
          <Link to="/proyectos" className="link-arrow">
            Ver todos los proyectos <span>→</span>
          </Link>
        </div>
        <div className="projects-grid">
          <div className="project-card">
            <div className="project-image">
              <img src="https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=400&h=250&fit=crop" alt="Proyecto Origen" />
            </div>
            <h4>PROYECTO ORIGEN</h4>
            <p className="project-location">La Pintada, Antioquia</p>
            <p className="project-desc">Sistema de reutilización de agua usada/residual.</p>
            <Link to="/proyectos" className="link-arrow">Ver proyecto <span>→</span></Link>
          </div>
          
          <div className="project-card">
            <div className="project-image">
              <img src="https://images.unsplash.com/photo-1585320806297-9794b3e4eeae?w=400&h=250&fit=crop" alt="Villa de Leyva" />
            </div>
            <h4>VILLA DE LEYVA</h4>
            <p className="project-location">Villa de Leyva, Boyacá</p>
            <p className="project-desc">Bio-jardín multifamiliar.</p>
            <Link to="/proyectos" className="link-arrow">Ver proyecto <span>→</span></Link>
          </div>
          
          <div className="project-card">
            <div className="project-image">
              <img src="https://images.unsplash.com/photo-1518531933037-91b2f5f229cc?w=400&h=250&fit=crop" alt="Universidad del Cauca" />
            </div>
            <h4>UNIVERSIDAD DEL CAUCA</h4>
            <p className="project-location">Popayán, Cauca</p>
            <p className="project-desc">Sistema institucional para 3,000 usuarios.</p>
            <Link to="/proyectos" className="link-arrow">Ver proyecto <span>→</span></Link>
          </div>
          
          <div className="project-card">
            <div className="project-image">
              <img src="https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&h=250&fit=crop" alt="Unifamiliar Alcaraván" />
            </div>
            <h4>UNIFAMILIAR ALCARAVÁN</h4>
            <p className="project-location">Cali, Valle del Cauca</p>
            <p className="project-desc">Bio-jardín residencial.</p>
            <Link to="/proyectos" className="link-arrow">Ver proyecto <span>→</span></Link>
          </div>
        </div>
      </section>
    </main>
  )
}

export default Home
