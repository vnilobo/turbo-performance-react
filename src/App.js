import './styles/Global.css';
import Header from './components/Header.js';
import Footer from './components/Footer.js';
import Inicio from './pages/Inicio.js';
import Produtos from './pages/Produtos.js';
import Contato from './pages/Contato.js';
import Encomendas from './pages/Ecomendas.js';
import { Routes, Route, Link } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Header/>
      <Routes>
        <Route path="/" element={<Inicio />} />
        <Route path="/produtos" element={<Produtos />} />
        <Route path="/contato" element={<Contato />} />
        <Route path="/encomendas" element={<Encomendas />} />
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;
