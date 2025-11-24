import React, { useState } from 'react';
import { Link } from "react-router-dom";
import LogoHeader from '../assets/images/turbo.png';
import '../styles/Header.css';

export default function Header() {
    const [open, setOpen] = useState(false)

    return (
        <header className="navbar">
            <img src={LogoHeader} alt="Turbo Performance" className="logo-nav" />

            <nav className={`nav-links ${open ? "active" : ""}`}>
                <Link to="/">Inicio</Link>
                <Link to="/produtos">Produtos</Link>
                <Link to="/contato">Contato</Link>
                <Link to="/encomendas">Encomendas</Link>
            </nav>

            <button className="menu-btn" onClick={() => setOpen(!open)}>
                {open ? <span className="menu-icon open">{"\u2715"}</span> : <span className="menu-icon close">{"\u2630"}</span>}
            </button>

            {open && <div className="overlay" onClick={() => setOpen(false)}></div>}
        </header>
    )
}