import { Link } from 'react-router-dom'
import './Proyectos.css'

function Proyectos() {
  const proyectos = [
    {
      id: 1,
      nombre: 'UNIVERSIDAD DEL CAUCA',
      ubicacion: 'Popayán, Cauca',
      descripcion: 'Sistema institucional de tratamiento para 3,000 usuarios diarios. Vista aérea del bio-jardín integrado al campus.',
      imagen: '/UNIVERSIDAD DEL CAUCA, TOMA AEREA.png',
      tipo: 'Institucional'
    },
    {
      id: 2,
      nombre: 'UNIVERSIDAD DEL CAUCA - DETALLE',
      ubicacion: 'Popayán, Cauca',
      descripcion: 'Bio-jardín con plantas de papiro que filtran y purifican las aguas residuales del campus universitario.',
      imagen: '/UNIVERSIDAD DEL CAUCA.png',
      tipo: 'Institucional'
    },
    {
      id: 3,
      nombre: 'VILLA DE LEYVA',
      ubicacion: 'Villa de Leyva, Boyacá',
      descripcion: 'Bio-jardín multifamiliar que trata aguas grises para riego de jardines ornamentales.',
      imagen: '/VILLA DE LEYVA.png',
      tipo: 'Residencial'
    },
    {
      id: 4,
      nombre: 'CASA BIFAMILIAR POPAYÁN',
      ubicacion: 'Popayán, Cauca',
      descripcion: 'Sistema de tratamiento residencial con plantas ornamentales integradas al paisajismo.',
      imagen: '/CASA BIFAMILIAR POPAYAN.png',
      tipo: 'Residencial'
    },
    {
      id: 5,
      nombre: 'CASA BIFAMILIAR',
      ubicacion: 'Valle del Cauca',
      descripcion: 'Bio-jardín bifamiliar con sistema de filtración natural mediante plantas acuáticas.',
      imagen: '/CASA BIFAMILIAR.png',
      tipo: 'Residencial'
    },
    {
      id: 6,
      nombre: 'PANCA CALI BIFAMILIAR',
      ubicacion: 'Cali, Valle del Cauca',
      descripcion: 'Bio-jardín residencial integrado al paisajismo de la vivienda con heliconias y papiros.',
      imagen: '/PANCA CALI BIFAMILIAR.png',
      tipo: 'Residencial'
    },
    {
      id: 7,
      nombre: 'SOPÓ',
      ubicacion: 'Sopó, Cundinamarca',
      descripcion: 'Sistema de tratamiento ecológico para vivienda rural en clima frío.',
      imagen: '/sopo cundinamarca.png',
      tipo: 'Rural'
    },
    {
      id: 8,
      nombre: 'BIO-JARDÍN RESIDENCIAL',
      ubicacion: 'Valle del Cauca',
      descripcion: 'Sistema de tratamiento de aguas residuales integrado al paisajismo con plantas de papiro.',
      imagen: '/biojardin_1.png',
      tipo: 'Residencial'
    }
  ]

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
                <div className="proyecto-image">
                  <img src={proyecto.imagen} alt={proyecto.nombre} />
                  <span className="proyecto-tipo">{proyecto.tipo}</span>
                </div>
                <div className="proyecto-content">
                  <h3>{proyecto.nombre}</h3>
                  <p className="proyecto-ubicacion">{proyecto.ubicacion}</p>
                  <p className="proyecto-desc">{proyecto.descripcion}</p>
                  <button className="link-arrow">
                    Ver detalles <span>→</span>
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="proyectos-cta">
        <div className="container">
          <h2>¿Tienes un proyecto en mente?</h2>
          <p>Diseñamos soluciones a medida para cualquier escala y necesidad</p>
          <Link to="/contacto" className="btn btn-primary">
            Solicitar cotización <span>›</span>
          </Link>
        </div>
      </section>
    </main>
  )
}

export default Proyectos
