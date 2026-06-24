import { Link } from 'react-router-dom'
import './Impacto.css'

function Impacto() {
  return (
    <main className="impacto-page">
      <section className="page-hero impacto-hero">
        <div className="page-hero-content">
          <h1>IMPACTO</h1>
          <p>El problema del agua es un problema de salud pública</p>
        </div>
      </section>

      <section className="impacto-problema">
        <div className="impacto-imagen">
          <img src="./rtb_82_por_ciento.png" alt="El Problema - 82% de enfermedades por mal manejo de excretas" />
        </div>
      </section>

      <section className="impacto-stats">
        <div className="container">
          <h2>La Crisis del Agua en Latinoamérica</h2>
          <div className="stats-grid">
            <div className="stat-card">
              <div className="stat-number">2.2</div>
              <div className="stat-unit">mil millones</div>
              <p>de personas sin acceso a agua potable en el mundo</p>
            </div>
            <div className="stat-card">
              <div className="stat-number">4.2</div>
              <div className="stat-unit">mil millones</div>
              <p>de personas sin saneamiento seguro</p>
            </div>
            <div className="stat-card">
              <div className="stat-number">80%</div>
              <div className="stat-unit">del agua residual</div>
              <p>se vierte sin tratamiento al medio ambiente</p>
            </div>
            <div className="stat-card">
              <div className="stat-number">297K</div>
              <div className="stat-unit">niños menores de 5 años</div>
              <p>mueren anualmente por enfermedades relacionadas con el agua</p>
            </div>
          </div>
        </div>
      </section>

      <section className="impacto-solucion">
        <div className="container">
          <div className="solucion-content">
            <h2>Nuestra Solución</h2>
            <p>
              Los Bio-Jardines ofrecen una alternativa accesible, sostenible y efectiva 
              para el tratamiento de aguas residuales. Con más de 25 años de experiencia, 
              hemos demostrado que es posible transformar un problema ambiental en una 
              oportunidad para la vida.
            </p>
            <div className="solucion-beneficios">
              <div className="beneficio">
                <span className="check">✓</span>
                <span>Reducción del 95% de contaminantes</span>
              </div>
              <div className="beneficio">
                <span className="check">✓</span>
                <span>Cero consumo de energía eléctrica</span>
              </div>
              <div className="beneficio">
                <span className="check">✓</span>
                <span>Agua reutilizable para riego</span>
              </div>
              <div className="beneficio">
                <span className="check">✓</span>
                <span>Mejora de la salud comunitaria</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="impacto-cta">
        <div className="container">
          <h2>Sé parte del cambio</h2>
          <p>Juntos podemos transformar la crisis del agua en una oportunidad</p>
          <Link to="/contacto" className="btn btn-primary">
            Contáctanos <span>›</span>
          </Link>
        </div>
      </section>
    </main>
  )
}

export default Impacto
