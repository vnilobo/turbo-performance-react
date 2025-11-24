import LogoFooter from '../assets/images/turbo.png';
import '../styles/Footer.css';

export default function Footer() {
    return (
        <footer>
            <img src={LogoFooter} alt="Turbo2"/>
            <div className="rodape">
                <span>Nosso contato:</span>
                <a href="https://web.whatsapp.com/" target="_blank">(11) 91234-5678</a>
                <a href="https://www.instagram.com/" target="_blank">@turbinhoperformance</a>
            </div>
        </footer>
    )
}