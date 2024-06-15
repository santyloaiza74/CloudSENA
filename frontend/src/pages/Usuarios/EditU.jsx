import { CDBContainer } from 'cdbreact';
import Sidebar from '../../components/Sidebar/Sidebar';
import Navbar from "../../components/Navbar/Navbar"
import EditU from '../../components/Usuario/listEdit';
import { Button } from 'react-bootstrap';

function usuariosE(){
    return(
        <div style={{ display: 'block', height: '100vh' }}>
        {/* Navbar */}
        <div >
          <Navbar />
        </div>
  
        <div style={{ display: 'flex', flexDirection: 'row' }}>
          {/* Sidebar */}
          <div style={{ width: '250px', backgroundColor: '#ffffff' }}>
            <Sidebar />
          </div>
  
          {/* Contenido de la página */}
          <div style={{ display:'flex', padding: '20px' }} >
            <CDBContainer>
              <EditU></EditU>
            </CDBContainer>
          </div>
        </div>
      </div>
    )
}

export default usuariosE