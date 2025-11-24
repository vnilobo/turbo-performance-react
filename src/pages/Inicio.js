import oficinaImg from '../assets/images/oficina.jpg';
import oficina2Img from '../assets/images/oficina2.jpg';
import '../styles/Inicio.css';

export default function Inicio() {
  return (
    <main>
      {/* ------------------- SOBRE NÓS -------------------- */}
      <section className="sobrenos">
        <img src={oficinaImg} className="img_sobrenos" alt="Oficina" />

        <div className="txt_sobrenos">
          <h2>QUEM SOMOS</h2>
          <p>
            Na nossa oficina, motor não é só peça, é paixão. Somos especializados
            em preparação e manutenção automotiva, com foco em desempenho,
            confiabilidade e aquela pegada que só quem tem alma turbinada
            entende. Trabalhamos com carros de rua, pista e projetos
            personalizados, sempre com atenção aos detalhes e respeito ao estilo
            de cada cliente.
            <br />
            <br />
            Mais do que consertar, gostamos de elevar o nível. Aqui, cada serviço
            é feito com alma de entusiasta. Seja um ajuste fino na injeção,
            preparação de motor ou manutenção preventiva. Porque, no fim das
            contas, quem gosta de motorzinho é dentista.
          </p>
        </div>
      </section>

      {/* ------------------- NOSSO ESTABELECIMENTO -------------------- */}
      <section className="estabelecimento">
        <div>
          <h2>ONDE ESTAMOS LOCALIZADOS 📍</h2>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7306.480197975839!2d-46.702369312744956!3d-23.70311848226761!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ce4f5c1f3bbc83%3A0x3039ef00468fb886!2sAut%C3%B3dromo%20de%20Interlagos!5e0!3m2!1spt-BR!2sbr!4v1748017560631!5m2!1spt-BR!2sbr"
            width="600"
            height="450"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Localização"
          ></iframe>
        </div>
      </section>

      {/* ------------------ NOSSOS PRODUTOS -------------------- */}
      <section className="produtos">
        <div className="servicos">
          <h2>NOSSOS PRODUTOS</h2>

          <nav className="nav_produtos">
            <ul>
              <li>👨‍🔧 Manutenção</li>
              <li>🚀 Performance</li>
              <li>🔰 Kits Especiais</li>
            </ul>
          </nav>
        </div>

        <img src={oficina2Img} alt="Oficina 2" />
      </section>

      {/* --------------- VÍDEO ---------------- */}
      <div className="video">
        <iframe
          width="660"
          height="415"
          src="https://www.youtube.com/embed/D1LCJypezdA?si=aTUqh20gMzx3wWpt"
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen
        ></iframe>
      </div>
    </main>
  );
}
