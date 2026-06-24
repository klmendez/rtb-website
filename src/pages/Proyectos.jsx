import { useState } from 'react'
import { Link } from 'react-router-dom'
import './Proyectos.css'

function Proyectos() {
  const [modalData, setModalData] = useState(null)
  const [currentImageIndex, setCurrentImageIndex] = useState(0)

  const proyectos = [
    {
      id: 1,
      nombre: 'UNIVERSIDAD DEL CAUCA',
      ubicacion: 'Popayán, Cauca',
      descripcion: 'Sistema institucional de tratamiento para 3,000 usuarios diarios. Bio-jardín con plantas de papiro que filtran y purifican las aguas residuales del campus universitario.',
      imagenes: [
        './UNIVERSIDAD DEL CAUCA, TOMA AEREA.png',
        './UNIVERSIDAD DEL CAUCA.png',
        './UNIVERSIDAD DEL CAUCA (2).png'
      ],
      tipo: 'Institucional'
    },
    {
      id: 2,
      nombre: 'VILLA DE LEYVA',
      ubicacion: 'Villa de Leyva, Boyacá',
      descripcion: 'Bio-jardín multifamiliar que trata aguas grises para riego de jardines ornamentales.',
      imagenes: ['./VILLA DE LEYVA.png'],
      tipo: 'Residencial'
    },
    {
      id: 3,
      nombre: 'CASA BIFAMILIAR POPAYÁN',
      ubicacion: 'Popayán, Cauca',
      descripcion: 'Sistema de tratamiento residencial con plantas ornamentales integradas al paisajismo.',
      imagenes: ['./CASA BIFAMILIAR POPAYAN.png'],
      tipo: 'Residencial'
    },
    {
      id: 4,
      nombre: 'CASA BIFAMILIAR',
      ubicacion: 'Valle del Cauca',
      descripcion: 'Bio-jardín bifamiliar con sistema de filtración natural mediante plantas acuáticas.',
      imagenes: ['./CASA BIFAMILIAR.png', './biojardin_1.png'],
      tipo: 'Residencial'
    },
    {
      id: 5,
      nombre: 'PANCE CALI',
      ubicacion: 'Cali, Valle del Cauca',
      descripcion: 'Bio-jardín residencial integrado al paisajismo de la vivienda con heliconias y papiros.',
      imagenes: ['./PANCE CALI BIFAMILIAR.png'],
      tipo: 'Residencial'
    },
    {
      id: 6,
      nombre: 'SOPÓ',
      ubicacion: 'Sopó, Cundinamarca',
      descripcion: 'Sistema de tratamiento ecológico para vivienda rural en clima frío.',
      imagenes: ['./sopo cundinamarca.png'],
      tipo: 'Rural'
    }
  ]

  const openModal = (proyecto) => {
    setModalData(proyecto)
    setCurrentImageIndex(0)
  }

  const closeModal = () => {
    setModalData(null)
    setCurrentImageIndex(0)
  }

  const nextImage = () => {
    if (modalData) {
      setCurrentImageIndex((prev) => 
        prev < modalData.imagenes.length - 1 ? prev + 1 : 0
      )
    }
  }

  const prevImage = () => {
    if (modalData) {
      setCurrentImageIndex((prev) => 
        prev > 0 ? prev - 1 : modalData.imagenes.length - 1
      )
    }
  }

  return (
    <main className="proyectos-page">
      <section className="page-hero">
        <div className="page-hero-content">
          <h1>PROYECTOS</h1>
          <p>Más de 25 años transformando el agua residual en oportunidades de vida</p>
        </div>
      </section>

      <section className="proyectos-section">
        <div className="container">
          <div className="proyectos-grid">
            {proyectos.map((proyecto) => (
              <div key={proyecto.id} className="proyecto-card">
                <div 
                  className="proyecto-image"
                  onClick={() => openModal(proyecto)}
                >
                  <img src={proyecto.imagenes[0]} alt={proyecto.nombre} />
                  <span className="proyecto-tipo">{proyecto.tipo}</span>
                  {proyecto.imagenes.length > 1 && (
                    <span className="proyecto-count">+{proyecto.imagenes.length - 1} fotos</span>
                  )}
                  <div className="proyecto-overlay">
                    <span>Ver proyecto</span>
                  </div>
                </div>
                <div className="proyecto-content">
                  <h3>{proyecto.nombre}</h3>
                  <p className="proyecto-ubicacion">{proyecto.ubicacion}</p>
                  <p className="proyecto-desc">{proyecto.descripcion}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {modalData && (
        <div className="modal-overlay" onClick={closeModal}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="modal-close" onClick={closeModal}>×</button>
            
            <div className="modal-gallery">
              {modalData.imagenes.length > 1 && (
                <button className="gallery-nav prev" onClick={prevImage}>‹</button>
              )}
              
              <img 
                src={modalData.imagenes[currentImageIndex]} 
                alt={`${modalData.nombre} - Imagen ${currentImageIndex + 1}`} 
              />
              
              {modalData.imagenes.length > 1 && (
                <button className="gallery-nav next" onClick={nextImage}>›</button>
              )}
            </div>

            {modalData.imagenes.length > 1 && (
              <div className="gallery-dots">
                {modalData.imagenes.map((_, index) => (
                  <button 
                    key={index}
                    className={`dot ${index === currentImageIndex ? 'active' : ''}`}
                    onClick={() => setCurrentImageIndex(index)}
                  />
                ))}
              </div>
            )}

            <div className="modal-info">
              <h2>{modalData.nombre}</h2>
              <p className="modal-ubicacion">{modalData.ubicacion}</p>
              <p>{modalData.descripcion}</p>
            </div>
          </div>
        </div>
      )}

      <section className="proyectos-cta">
        <div className="container">
          <h2>¿Tienes un proyecto en mente?</h2>
          <p>Diseñamos y construimos soluciones a medida para cualquier escala y necesidad</p>
          <Link to="/contacto" className="btn btn-primary">
            Solicitar cotización <span>›</span>
          </Link>
        </div>
      </section>
    </main>
  )
}

export default Proyectos
