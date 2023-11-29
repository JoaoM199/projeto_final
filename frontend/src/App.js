import './App.css';

// Importando componente de página
import {BrowserRouter, Routes, Route} from 'react-router-dom';  // React router DOM
import Navbar from './components/Navbar';   // Sistema de navegação
import Footer from './components/Footer';

// Importando as páginas
import Home from "./pages/Home";
import About from "./pages/About";
import Wishlist from './pages/Wishlist';
import Cart from './pages/Cart';
import Myaccount from './pages/Myaccount';

function App() {
  return (
    <div className="App">
      <div className='mainPage'>
        {/* Estrutura de navegação do site */}
        <div>
          <BrowserRouter>
            <Navbar />
            <Routes>  {/* Páginas do site */}
              <Route path="/" element={<Home />} /> {/*Homepage*/}
              <Route path="/cart" element={<Cart />} /> {/*Carrinho*/}
              <Route path="/myaccount" element={<Myaccount />} /> {/*Minha Conta*/}
              <Route path="/wishlist" element={<Wishlist />} /> {/*Lista de desejos*/}
              <Route path="/about" element={<About />} /> {/*Sobre*/}
            </Routes>
          </BrowserRouter>
          <Footer />
        </div>
      </div>
    </div>
  );
};

export default App;
