import LogoFooter from '../assets/images/turbo.png';
import '../styles/Footer.css';

export default function Footer() {
    return (
        <footer>
            <img src={LogoFooter} alt="Turbo2"/>
            <div className="rodape">
                <a href="https://github.com/vnilobo/turbo-performance-react" target="_blank">Github</a>
                <a href="https://www.instagram.com/" target="_blank">Instagram</a>
                <a href="https://web.whatsapp.com/" target="_blank">Whatsapp</a>
                <a href="https://x.com/?lang=pt" target="_blank">X</a>
            </div>
        </footer>
    )
}