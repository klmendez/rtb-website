import { useState } from 'react'
import { Link } from 'react-router-dom'
import './Reconocimientos.css'

function Reconocimientos() {
  const [modalImage, setModalImage] = useState(null)

  const certificados = [
    {
      id: 1,
      titulo: 'Premio al Mejor Proyecto de Innovacion',
      entidad: 'Ingenia Biosystems / Red Alfa-TECSPAR',
      año: '2012',
      descripcion: 'Mencion especial en el Congreso Internacional Gestion Sostenible del Agua por el proyecto "Obras con Sobras, Hechos con Desechos".',
      imagen: './Ingenia Biosystems.png',
      categoria: 'Reconocimiento Internacional'
    },
    {
      id: 2,
      titulo: 'Carta de Aprobacion - Cabildo Indigena de Guamia',
      entidad: 'Autoridad Ancestral del Territorio Wampia del Pueblo Misak',
      año: '2012',
      descripcion: 'Aprobacion del sistema PETAR mediante biofiltros para el Hospital Mama Dominga y el Colegio Agropecuario del Resguardo de Guamia.',
      imagen: './autoridad misak.png',
      categoria: 'Proyecto Social'
    },
    {
      id: 3,
      titulo: 'Premio CEMEX-TEC Edicion 2015',
      entidad: 'CEMEX / Tecnologico de Monterrey',
      año: '2015',
      descripcion: 'Ganador Categoria Emprendedores Sociales con el proyecto "Obras con Sobras". Reconocimiento al impacto ambiental y social.',
      imagen: './CEMEX.png',
      categoria: 'Reconocimiento Internacional'
    },
    {
      id: 4,
      titulo: 'Trofeo Premio CEMEX-TEC',
      entidad: 'CEMEX / Tecnologico de Monterrey',
      año: '2015',
      descripcion: 'Trofeo fisico del Premio CEMEX-TEC Edicion 2015, Categoria Emprendedores Sociales, proyecto "Obras con Sobras", Popayan - Colombia.',
      imagen: './CEMEX 2.png',
      categoria: 'Reconocimiento Internacional'
    },
    {
      id: 5,
      titulo: 'Certificado de Registro de Signo Distintivo',
      entidad: 'Superintendencia de Industria y Comercio',
      año: '2021',
      descripcion: 'Marca Mixta RTB BIO-JARDIN registrada oficialmente. Certificado No. 698724 para filtros ecologicos para la depuracion de aguas residuales.',
      imagen: './Certificado de Registro distitivo.png',
      categoria: 'Registro de Marca'
    },
    {
      id: 6,
      titulo: 'Certificado de Alianza Estrategica',
      entidad: 'Montero Ingenieria S.A.S.',
      año: '2026',
      descripcion: 'Alianza estrategica para la implementacion de ecotecnologias y desarrollo de Biojardines en el sector avicola del Valle del Cauca.',
      imagen: './certificado de montero.png',
      categoria: 'Alianza Empresarial'
    }
  ]

  return (
    <main className="reconocimientos-page">
      <section className="page-hero">
        <div className="page-hero-content">
          <h1>RECONOCIMIENTOS</h1>
          <p>Más de 25 años de trayectoria avalados por instituciones nacionales e internacionales</p>
        </div>
      </section>

      <section className="reconocimientos-intro">
        <div className="container">
          <div className="intro-content">
            <div className="intro-icon">
              <svg viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z"/>
              </svg>
            </div>
            <div className="intro-text">
              <h2>Certificaciones y Alianzas</h2>
              <p>
                Nuestra dedicación al desarrollo de soluciones ecológicas para el tratamiento 
                del agua ha sido reconocida por diversas instituciones. Cada certificación 
                representa nuestro compromiso con la excelencia y la sostenibilidad.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="certificados-section">
        <div className="container">
          <h2>Certificados Oficiales</h2>
          <div className="certificados-grid">
            {certificados.map((cert) => (
              <div key={cert.id} className="certificado-card">
                <div 
                  className="certificado-imagen"
                  onClick={() => setModalImage(cert.imagen)}
                >
                  <img src={cert.imagen} alt={cert.titulo} />
                  <div className="certificado-overlay">
                    <span>Ver certificado</span>
                  </div>
                </div>
                <div className="certificado-content">
                  <span className="certificado-categoria">{cert.categoria}</span>
                  <h3>{cert.titulo}</h3>
                  <p className="certificado-entidad">{cert.entidad}</p>
                  <p className="certificado-desc">{cert.descripcion}</p>
                  <span className="certificado-año">{cert.año}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {modalImage && (
        <div className="modal-overlay" onClick={() => setModalImage(null)}>
          <div className="modal-content">
            <button className="modal-close" onClick={() => setModalImage(null)}>×</button>
            <img src={modalImage} alt="Certificado" />
          </div>
        </div>
      )}

      <section className="reconocimientos-destacado">
        <div className="container">
          <div className="destacado-content">
            <div className="destacado-imagen">
              <img src="./hero_rtb_imagen.png" alt="Carlos Alberto Sarzosa" />
            </div>
            <div className="destacado-texto">
              <h2>Carlos Alberto Sarzosa</h2>
              <p>
                Fundador de RTB Bio-Jardines, con más de 25 años de experiencia en el desarrollo 
                de soluciones ecológicas para el tratamiento de aguas residuales. Su trabajo ha 
                sido reconocido por instituciones nacionales e internacionales.
              </p>
              <blockquote>
                "El agua limpia significa salud. Nuestro trabajo es transformar un problema 
                ambiental en una oportunidad para la vida."
              </blockquote>
              <p className="autor">— Carlos Alberto Sarzosa, Fundador RTB Bio-Jardines</p>
            </div>
          </div>
        </div>
      </section>

      <section className="reconocimientos-cta">
        <div className="container">
          <h2>¿Quieres conocer más sobre nuestro trabajo?</h2>
          <p>Descubre cómo podemos ayudarte a implementar soluciones sostenibles</p>
          <Link to="/contacto" className="btn btn-primary">
            Contáctanos <span>›</span>
          </Link>
        </div>
      </section>
    </main>
  )
}

export default Reconocimientos
