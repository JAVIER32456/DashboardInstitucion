import React from 'react'
import './sidebar.css';
import { Link } from 'react-router-dom';


const Sidebar = () => {
  return (
    <div className='sidebar' >
        <ul>
            <li>
                <Link to="/">Inicio</Link>
            </li>
            <li>
                <Link to="/Form">Registro Estudiantes </Link>
            </li>
            <li>
                <Link to="/Academico">Seguimiento Academico</Link>
            </li>
            <li>
                <Link to="">Informes Academicos</Link>
            </li>
        </ul>
    </div>
  )
}

export default Sidebar