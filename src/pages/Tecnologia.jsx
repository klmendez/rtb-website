import { Link } from 'react-router-dom'
import './Tecnologia.css'

function Tecnologia() {
  return (
    <main className="tecnologia-page">
      <section className="page-hero">
        <div className="page-hero-content">
          <h1>TECNOLOGÍA</h1>
          <p>Soluciones ecológicas basadas en la naturaleza para el tratamiento del agua</p>
        </div>
      </section>

      <section className="tech-intro">
        <div className="container">
          <div className="tech-intro-content">
            <h2>¿Qué son los Bio-Jardines?</h2>
            <p>
              Los Bio-Jardines son sistemas de tratamiento de aguas residuales que utilizan 
              procesos naturales para depurar el agua. Combinan plantas acuáticas, microorganismos 
              y sustratos especiales para crear un ecosistema que transforma el agua contaminada 
              en agua limpia que puede ser reutilizada.
            </p>
          </div>
        </div>
      </section>

      <section className="tech-process">
        <div className="container">
          <h2>Proceso de Tratamiento</h2>
          <div className="process-steps">
            <div className="process-step">
              <div className="step-number">01</div>
              <h3>Recolección</h3>
              <p>El agua residual es recolectada y dirigida hacia el sistema de tratamiento.</p>
            </div>
            <div className="process-step">
              <div className="step-number">02</div>
              <h3>Pre-tratamiento</h3>
              <p>Separación de sólidos gruesos y grasas mediante procesos físicos.</p>
            </div>
            <div className="process-step">
              <div className="step-number">03</div>
              <h3>Tratamiento Biológico</h3>
              <p>Las plantas y microorganismos degradan la materia orgánica del agua.</p>
            </div>
            <div className="process-step">
              <div className="step-number">04</div>
              <h3>Reutilización</h3>
              <p>El agua tratada puede usarse para riego, recarga de acuíferos o paisajismo.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="tech-benefits">
        <div className="container">
          <h2>Beneficios de Nuestra Tecnología</h2>
          <div className="benefits-grid">
            <div className="benefit-card">
              <div className="benefit-icon"><svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 22c4.97 0 9-4.03 9-9-4.97 0-9 4.03-9 9zM5.6 10.25c0 1.38 1.12 2.5 2.5 2.5.53 0 1.01-.16 1.42-.44l-.02.19c0 1.38 1.12 2.5 2.5 2.5s2.5-1.12 2.5-2.5l-.02-.19c.4.28.89.44 1.42.44 1.38 0 2.5-1.12 2.5-2.5 0-1-.59-1.85-1.43-2.25.84-.4 1.43-1.25 1.43-2.25 0-1.38-1.12-2.5-2.5-2.5-.53 0-1.01.16-1.42.44l.02-.19C14.5 4.12 13.38 3 12 3S9.5 4.12 9.5 5.5l.02.19c-.4-.28-.89-.44-1.42-.44-1.38 0-2.5 1.12-2.5 2.5 0 1 .59 1.85 1.43 2.25-.84.4-1.43 1.25-1.43 2.25zM12 5.5c1.38 0 2.5 1.12 2.5 2.5s-1.12 2.5-2.5 2.5S9.5 9.38 9.5 8s1.12-2.5 2.5-2.5zM3 13c0 4.97 4.03 9 9 9 0-4.97-4.03-9-9-9z"/></svg></div>
              <h3>100% Natural</h3>
              <p>Sin químicos ni procesos artificiales. Solo la naturaleza trabajando.</p>
            </div>
            <div className="benefit-card">
              <div className="benefit-icon"><svg viewBox="0 0 24 24" fill="currentColor"><path d="M11.8 10.9c-2.27-.59-3-1.2-3-2.15 0-1.09 1.01-1.85 2.7-1.85 1.78 0 2.44.85 2.5 2.1h2.21c-.07-1.72-1.12-3.3-3.21-3.81V3h-3v2.16c-1.94.42-3.5 1.68-3.5 3.61 0 2.31 1.91 3.46 4.7 4.13 2.5.6 3 1.48 3 2.41 0 .69-.49 1.79-2.7 1.79-2.06 0-2.87-.92-2.98-2.1h-2.2c.12 2.19 1.76 3.42 3.68 3.83V21h3v-2.15c1.95-.37 3.5-1.5 3.5-3.55 0-2.84-2.43-3.81-4.7-4.4z"/></svg></div>
              <h3>Bajo Costo</h3>
              <p>Mínimo mantenimiento y sin costos de energía eléctrica.</p>
            </div>
            <div className="benefit-card">
              <div className="benefit-icon"><svg viewBox="0 0 24 24" fill="currentColor"><path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z"/></svg></div>
              <h3>Estético</h3>
              <p>Se integra como un jardín ornamental en cualquier espacio.</p>
            </div>
            <div className="benefit-card">
              <div className="benefit-icon"><svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 4V1L8 5l4 4V6c3.31 0 6 2.69 6 6 0 1.01-.25 1.97-.7 2.8l1.46 1.46C19.54 15.03 20 13.57 20 12c0-4.42-3.58-8-8-8zm0 14c-3.31 0-6-2.69-6-6 0-1.01.25-1.97.7-2.8L5.24 7.74C4.46 8.97 4 10.43 4 12c0 4.42 3.58 8 8 8v3l4-4-4-4v3z"/></svg></div>
              <h3>Sostenible</h3>
              <p>Reduce el impacto ambiental y promueve la economía circular.</p>
            </div>
            <div className="benefit-card">
              <div className="benefit-icon"><svg viewBox="0 0 24 24" fill="currentColor"><path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zM9 17H7v-7h2v7zm4 0h-2V7h2v10zm4 0h-2v-4h2v4z"/></svg></div>
              <h3>Eficiente</h3>
              <p>Hasta 95% de remoción de contaminantes orgánicos.</p>
            </div>
            <div className="benefit-card">
              <div className="benefit-icon"><svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.95-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z"/></svg></div>
              <h3>Adaptable</h3>
              <p>Funciona en cualquier clima y escala, desde casas hasta industrias.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="tech-cta">
        <div className="container">
          <h2>¿Interesado en implementar esta tecnología?</h2>
          <p>Contáctanos para una asesoría personalizada</p>
          <Link to="/contacto" className="btn btn-primary">
            Solicitar información <span>›</span>
          </Link>
        </div>
      </section>
    </main>
  )
}

export default Tecnologia
