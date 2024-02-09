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
        <CDBSidebarHeader prefix={<i className="fa fa-bars fa-large" style={{ color: '#00ff00' }}></i>}>
          <a className="text-decoration-none" style={{ color: '#000000' }}>
            Menú
          </a>
        </CDBSidebarHeader>

        <CDBSidebarContent className="sidebar-content">
          <CDBSidebarMenu>
            <NavLink exact to="/" activeClassName="activeClicked">
              <CDBSidebarMenuItem icon="columns" style={{ color: '#00ff00' }}>
                <span style={{ color: '#000000' }}>Dashboard</span>
              </CDBSidebarMenuItem>
            </NavLink>
            <NavLink exact to="/" activeClassName="activeClicked">
              <CDBSidebarMenuItem icon="table" style={{ color: '#00ff00' }}>
              <span style={{ color: '#000000' }}>Dashboard</span>
              </CDBSidebarMenuItem>
            </NavLink>
            <NavLink exact to="/" activeClassName="activeClicked">
              <CDBSidebarMenuItem icon="user" style={{ color: '#00ff00' }}>
              <span style={{ color: '#000000' }}>Dashboard</span>
              </CDBSidebarMenuItem>
            </NavLink>
            <NavLink exact to="/" activeClassName="activeClicked">
              <CDBSidebarMenuItem icon="chart-line" style={{ color: '#00ff00' }}>
              <span style={{ color: '#000000' }}>Dashboard</span>
              </CDBSidebarMenuItem>
            </NavLink>

            <NavLink exact to="/" target="_blank" activeClassName="activeClicked">
              <CDBSidebarMenuItem icon="fa-solid fa-book" style={{ color: '#00ff00' }}>
              <span style={{ color: '#000000' }}>Dashboard</span>
              </CDBSidebarMenuItem>
            </NavLink>
          </CDBSidebarMenu>
        </CDBSidebarContent>

        <CDBSidebarFooter style={{ textAlign: 'center', color: '#00ff00' }}>
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
