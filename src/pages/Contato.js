import { useState, useEffect } from 'react';
import '../styles/Contato.css';

export default function Contato() {

    const [dataTexto, setDataTexto] = useState("");

    useEffect(() => {
        const data = new Date();

        const dia = new Array(
            "Domingo",
            "Segunda-feira",
            "Terça-feira",
            "Quarta-feira",
            "Quinta-feira",
            "Sexta-feira",
            "Sábado"
        );

        const mes = new Array(
            "Janeiro",
            "Fevereiro",
            "Março",
            "Abril",
            "Maio",
            "Junho",
            "Julho",
            "Agosto",
            "Setembro",
            "Outubro",
            "Novembro",
            "Dezembro"
        );

        const resultado =
            dia[data.getDay()] +
            ", " +
            data.getDate() +
            " de " +
            mes[data.getMonth()] +
            " de " +
            data.getFullYear();

        setDataTexto(resultado);
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
                    Mensagem:
                    <textarea name="mensagem" placeholder="Digite sua mensagem..." required />
                </label>

                <label className="motivo-contato">
                    Informe o motivo do contato
                    <select name="motivo" required>
                        <option>Selecione</option>
                        <option>Relatar um problema</option>
                        <option>Dúvida</option>
                        <option>Ajuda</option>
                        <option>Outro</option>
                    </select>
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

            <p className="data-atual">{dataTexto}</p>
        </main>
    );
}