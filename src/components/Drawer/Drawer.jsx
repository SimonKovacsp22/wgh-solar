import React from 'react'
import { NavLink } from 'react-router-dom'
import './styles-drawer.css'

const Drawer = ({drawerOpen, isSm}) => {

    
    
  return (

        <div className={`navbar_buttons_container drawer_buttons my-column ${drawerOpen && isSm ? 'drawer_open' : 'drawer_close'}`}>
          <NavLink to="/">
            <button>Domov</button>
          </NavLink>
          <NavLink to="/sluzby">
            <button>Služby</button>
          </NavLink>
          <NavLink to="/realizacie">
            <button>Realizácie</button>
          </NavLink>
          <NavLink to="/kontakt">
            <button style={{borderBottom:'none'}}>Kontakt</button>
          </NavLink>
        </div>
     
  )
}

export default Drawer