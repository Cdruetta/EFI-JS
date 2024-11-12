import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Menubar } from 'primereact/menubar';
import UserContainer from './components/users/UserContainer';
import EquiposContainer from "./components/Equipos/EquiposContainer";
import CreateUser from './components/users/CreateUser';
import Home from './components/home';
import LoginUser from './components/users/LoginUser'; 

function App() {
  // Menú de navegación
  const items = [
    { label: 'Home', icon: 'pi pi-home', url: '/' },
    { label: 'Inicio Sesión', icon: 'pi pi-sign-in', url: '/inicio-sesion' },
    { label: 'Nuevo Usuario', icon: 'pi pi-user-plus', url: '/nuevo-usuario' },
    { label: 'Usuarios', icon: 'pi pi-users', url: '/usuarios' },
    { label: 'Equipos', icon: 'pi pi-mobile', url: '/equipos' },
  ];

  return (
    <BrowserRouter>
      {/* Menú de navegación */}
      <header>
        <Menubar model={items} className="menubar-custom" />
      </header>

      {/* Contenido principal */}
      <main className="content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/inicio-sesion" element={<LoginUser />} />
          <Route path='/equipos' element={<EquiposContainer/>} />
          <Route path="/nuevo-usuario" element={<CreateUser />} />
          <Route path="/usuarios" element={<UserContainer />} />
        </Routes>
      </main>

      {/* Pie de página */}
      <footer className="footer">
        
        <p>Aplicación desarrollada por Cristian y Ovtavio para gestionar usuarios y roles en una tienda de celulares</p>
      </footer>
    </BrowserRouter>
  );
}

export default App;
