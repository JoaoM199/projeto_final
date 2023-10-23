import './App.css';

// Importando componente de página
import {BrowserRouter, Routes, Route} from 'react-router-dom';  // React router DOM
import Navbar from './components/Navbar';   // Sistema de navegação

// Importando as páginas
import Home from "./pages/Home";
import About from "./pages/About";

function App() {
  return (
    <div className="App">
      {/*Logo do aplicativo*/ }
      <div className="logoInicio">  
        <p>Inserir logo aqui</p>
      </div>

      <div className='Mainpage'>
        {/* Estrutura de navegação do site */}
        <BrowserRouter>
          <Navbar />
          <Routes>  {/* Páginas do site */}
            <Route path="/" element={<Home />} /> {/*Homepage*/}
            <Route path="/about" element={<About />} /> {/*Sobre*/}
          </Routes>
        </BrowserRouter>
      </div>
    </div>
  );
};

export default App;
