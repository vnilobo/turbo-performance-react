// Manutenção
import Oleo from '../assets/images/img_cards/manutenção/01_oleo_motor_mobil1.png';
import Bateria from '../assets/images/img_cards/manutenção/09_bateria_moura.png';
import FiltroComum from '../assets/images/img_cards/manutenção/03_filtro_ar_fram.png';

// Performance
import Turbina from '../assets/images/img_cards/performance/21_turbina_garrett.png';
import FiltroEsportivo from '../assets/images/img_cards/performance/20_filtro_ar_esportivo_k&n.png';
import Intercooler from '../assets/images/img_cards/performance/22_intercooler_mishimoto.png';

// Kits Especiais
import Stg1 from '../assets/images/img_cards/kits_especiais/Stage_1.png';
import Stg2 from '../assets/images/img_cards/kits_especiais/Stage_2.png';
import Stg4 from '../assets/images/img_cards/kits_especiais/Stage_4.png';

import '../styles/Produtos.css';

export default function Produtos() {
  return (
    <main className="main_produtos">

      <section className="produtos_header">
        <h2>NOSSOS PRODUTOS</h2>
        <p>Confira nossas categorias de serviços e produtos.</p>
      </section>

      {/* ========================= MANUTENÇÃO ========================= */}
      <section className="categoria">
        <h3 className="categoria_titulo">🔧 Manutenção</h3>

        <div className="produtos_grid">

          <div className="card_produto">
            <img src={Oleo} alt="Troca de Óleo" />
            <h4>Óleo</h4>
            <p>Lubrificação que reduz o atrito, dissipa o calor e prolonga a vida útil do seu motor.</p>
          </div>

          <div className="card_produto">
            <img src={Bateria} alt="Alinhamento e Balanceamento" />
            <h4>Bateria</h4>
            <p>Garante a partida confiável e o funcionamento dos sistemas elétricos do veículo.</p>
          </div>

          <div className="card_produto">
            <img src={FiltroComum} alt="Revisão" />
            <h4>Filtro de ar</h4>
            <p>Garante que o ar limpo chegue à combustão para máxima eficiência e durabilidade.</p>
          </div>

        </div>
      </section>

      {/* ========================= PERFORMANCE ========================= */}
      <section className="categoria">
        <h3 className="categoria_titulo">🚀 Performance</h3>

        <div className="produtos_grid">

          <div className="card_produto">
            <img src={Turbina} alt="Remap" />
            <h4>Turbina</h4>
            <p>Mais torque, potência e resposta.</p>
          </div>

          <div className="card_produto">
            <img src={FiltroEsportivo} alt="Escapamento Esportivo" />
            <h4>Filtro Esportivo</h4>
            <p>Fluxo de ar superior, reutilizável e de alta performance.</p>
          </div>

          <div className="card_produto">
            <img src={Intercooler} alt="Turbo Upgrade" />
            <h4>Intercooler</h4>
            <p>Resfria o ar comprimido, aumentando a densidade e garantindo mais eficiência.</p>
          </div>

        </div>
      </section>

      {/* ========================= KITS ESPECIAIS ========================= */}
      <section className="categoria">
        <h3 className="categoria_titulo">🔰 Kits Especiais</h3>

        <div className="produtos_grid">

          <div className="card_produto">
            <img src={Stg1} alt="Kit Embreagem" />
            <h4>Kit Stage 1</h4>
            <p>Mais agilidade pro dia a dia.</p>
          </div>

          <div className="card_produto">
            <img src={Stg2} alt="Kit Injeção" />
            <h4>Kit Stage 2</h4>
            <p>Mais performance para seu carro.</p>
          </div>

          <div className="card_produto">
            <img src={Stg4} alt="Kit Freio" />
            <h4>Kit Stage 4</h4>
            <p>Upgrade de alto nível (recomendado para pista e provas de arrancada).</p>
          </div>

        </div>
      </section>

    </main>
  );
}
