import { useState, useEffect } from 'react';
import '../styles/Contato.css';

export default function Contato() {
    const [dataAtual, setDataAtual] = useState("");

    useEffect(() => {
        const agora = new Date();
        const dataFormatada = agora.toLocaleDateString("pt-BR", {
            day: "2-digit",
            month: "2-digit",
            year: "numeric"
        });
        setDataAtual(dataFormatada);
    }, []);

    return (
        <main className="contato-container">
            <h2>Entre em Contato 👨‍🔧</h2>

            <form className="form-contato">
                <label>
                    Nome:
                    <input type="text" name="nome" placeholder="Seu nome" required />
                </label>

                <label>
                    E-mail:
                    <input type="email" name="email" placeholder="Seu e-mail" required />
                </label>

                <label>
                    Marca:
                    <input type="text" name="marca" placeholder="Marca do veículo" required />
                </label>

                <label>
                    Modelo:
                    <input type="text" name="modelo" placeholder="Modelo do veículo" required />
                </label>

                <label>
                    Ano:
                    <input type="number" name="ano" placeholder="Ano do veículo" required />
                </label>

                <label>
                    Mensagem:
                    <textarea name="mensagem" placeholder="Informe seu problema ou dúvida..." required />
                </label>

                <label className="label-radio">
                    Qual meio de contato você prefere?

                    <div className="grupo-radio">
                        <label>
                            <input type="radio" name="metodo_contato" value="email" />E-mail
                        </label>

                        <label>
                            <input type="radio" name="metodo_contato" value="celular" />Celular
                        </label>

                        <label>
                            <input type="radio" name="metodo_contato" value="whatsapp" />Whatsapp
                        </label>
                    </div>
                </label>

                <label className="label-checkbox">
                    Deseja receber novidades por e-mail?
                    <input type="checkbox" name="novidades" />
                </label>

                <button type="submit">Enviar</button>
            </form>

            <p className="data-atual">Data atual: {dataAtual}</p>
        </main>
    );
}