import React, { useState } from 'react';
import {
  CDBNavbar,
  CDBNavBrand,
  CDBNavItem,
  CDBNavLink,
  CDBNavToggle,
  CDBIcon,
  CDBCollapse,
  CDBNavbarNav,
} from 'cdbreact';
import './navbar.css';

const Navbar = () => {
  const [collapse, setCollapse] = useState(false);

  return (
    <CDBNavbar className="navbarStyle" dark expand="md" scrolling>
      <CDBNavBrand href="/">
        <strong className="brandStyle">Cloud Sena</strong>
      </CDBNavBrand>
      <CDBNavToggle
        onClick={() => {
          setCollapse(!collapse);
        }}
      />
      <CDBCollapse id="navbarCollapse1" isOpen={collapse} navbar>
        <CDBNavbarNav className="ms-auto d-flex justify-content-end">
          <CDBNavItem className="navItemStyle">
            <CDBNavLink to="#" className="navLinkStyle">
              <CDBIcon icon="globe" className="me-2" />
              EN
            </CDBNavLink>
          </CDBNavItem>
          <CDBNavItem className="navItemStyle">
            <CDBNavLink to="/login" className="navLinkStyle">
              <CDBIcon icon="user" className="me-2" />
              Login
            </CDBNavLink>
          </CDBNavItem>
          <CDBNavItem className="navItemStyle">
            <CDBNavLink to="/login/register" className="navLinkStyle">
              Sign Up
            </CDBNavLink>
          </CDBNavItem>
        </CDBNavbarNav>
      </CDBCollapse>
    </CDBNavbar>
  );
};

export default Navbar;
