import React, { useState } from 'react';
import {
  CDBNavbar,
  CDBNavBrand,
  CDBNavItem,
  CDBNavLink,
  CDBDropDown,
  CDBDropDownMenu,
  CDBNavToggle,
  CDBIcon,
  CDBCollapse,
  CDBNavbarNav,
} from 'cdbreact';

const Navbar = () => {
  const [collapse2, setCollapse2] = useState(false);

  const navbarStyle = {
    backgroundColor: 'white', // Fondo blanco
    color: '#00ff00', // Texto verde
    marginBottom: '0',
    width: '100%',
    borderBottom: '5px solid #00ff00', // Borde inferior verde
    fontFamily: 'sans-serif', // Cambia la fuente según sea necesario
  };

  const navItemStyle = {
    marginRight: '30px', // Ajusta el margen derecho según tus preferencias
    listStyle: 'none',
    backgroundColor: 'white', // Fondo blanco
    color: '#00ff00', // Texto verde
    marginBottom: '0',

    // fontFamily: 'Arial', // Agrega la fuente utilizada en Sidebar
    // fontWeight: 'bold', // Agrega el peso de fuente utilizado en Sidebar

  };

  return (
    <CDBNavbar style={navbarStyle} dark expand="md" scrolling>
      <CDBNavBrand href="/">
        <strong style={{ color: '#00ff00', paddingLeft:'30px' }}>Cloud Sena</strong>
      </CDBNavBrand>
      <CDBNavToggle
        onClick={() => {
          setCollapse2(!collapse2);
        }}
      />
      <CDBCollapse id="navbarCollapse1" isOpen={collapse2} navbar>
        <div className="ms-auto d-flex justify-content-end">
          <CDBNavItem style={navItemStyle}>
            <CDBNavLink to="#" style={{ color: '#00ff00' }}>
              <CDBIcon icon="globe" className="me-2" />
              EN
            </CDBNavLink>
          </CDBNavItem>
          <CDBNavItem style={navItemStyle}>
            <CDBNavLink to="/login" style={{ color: '#00ff00' }}>
              <CDBIcon icon="user" className="me-2" />
              Login
            </CDBNavLink>
          </CDBNavItem>
          <CDBNavItem style={navItemStyle}>
            <CDBNavLink to="/login/register" style={{ color: '#000' }}>
              Sign Up
            </CDBNavLink>
          </CDBNavItem>
        </div>
      </CDBCollapse>
    </CDBNavbar>
  );
};

export default Navbar;
