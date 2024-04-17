import React from 'react';
import {
  CDBSidebar,
  CDBSidebarContent,
  CDBSidebarFooter,
  CDBSidebarHeader,
  CDBSidebarMenu,
  CDBSidebarMenuItem,
} from 'cdbreact';
import { NavLink } from 'react-router-dom';
import './Sidebar.css'; // Asegúrate de importar tu archivo de estilos
import logo1 from './../../img/logo1.png' 
const Sidebar = () => {
  return (
    <div style={{ display: 'flex', height: '100vh', overflow: 'scroll initial' }}>
      <CDBSidebar textColor="#000000" backgroundColor="#ffffff" className='custom-sidebar'>
        <CDBSidebarHeader  prefix={<i className="fa fa-bars fa-large" style={{ color: '#39A900' }}></i>}>
          <a className="text-decoration-none" style={{ color: '#000000' }}>
            Menú
          </a>
        </CDBSidebarHeader>

        <CDBSidebarContent className="sidebar-content">
          <CDBSidebarMenu>
            <NavLink exact to="/proyecto" activeClassName="activeClicked">
              <CDBSidebarMenuItem icon="fa-solid fa-plus" style={{ color: '#39A900' }}>
                <span style={{ color: '#000000' }}>Crear Proyecto</span>
              </CDBSidebarMenuItem>
            </NavLink>
            <NavLink exact to="/fichas" activeClassName="activeClicked">
              <CDBSidebarMenuItem icon="table" style={{ color: '#39A900' }}>
              <span style={{ color: '#000000' }}>Fichas</span>
              </CDBSidebarMenuItem>
            </NavLink>
            <NavLink exact to="/users" activeClassName="activeClicked">
              <CDBSidebarMenuItem icon="user" style={{ color: '#39A900' }}>
              <span style={{ color: '#000000' }}>Usuarios</span>
              </CDBSidebarMenuItem>
            </NavLink>
          </CDBSidebarMenu>
        </CDBSidebarContent>

        <CDBSidebarFooter style={{ textAlign: 'center', color: '#39A900' }}>
          <div
            style={{
              padding: '20px 5px',
            }}
          >
            Cloud Sena
          </div>
        </CDBSidebarFooter>
      </CDBSidebar>
    </div>
  );
};

export default Sidebar;
