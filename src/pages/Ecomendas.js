import React, { useEffect, useRef } from 'react';
import '../styles/Encomendas.css';

export default function Encomendas() {
    const rootRef = useRef(null);

    useEffect(() => {
        const root = rootRef.current;
        
        const tabela = root.querySelector("#tabela-cliente");
        const botaoAdicionar = root.querySelector("#adicionar");
        const campoFiltro = root.querySelector("#buscar");
        const form = root.querySelector("#adicionar-encomenda");
        const tabelaMaior = root.querySelector("table");

        // -------------------------------
        // Funções utilitárias corrigidas
        // -------------------------------

        function limparValor(valor) {
            if (!valor) return "";
            return valor.replace("R$", "").replace(/\./g, "").replace(",", ".").trim();
        }

        function formataValor(num) {
            const n = parseFloat(num);
            if (isNaN(n)) return "";
            return n.toLocaleString("pt-BR", { style: "currency", currency: "BRL" });
        }

        function calculaTotal(qtde, unit) {
            const q = parseFloat(qtde);
            const u = parseFloat(unit);
            if (isNaN(q) || isNaN(u)) return "";
            return formataValor(q * u);
        }

        // Criação das células com classe
        function criaTd(valor, classe) {
            const td = document.createElement("td");
            td.classList.add(classe);
            td.textContent = valor;
            return td;
        }

        // Criação da linha completa
        function montaLinha(dados) {
            const tr = document.createElement("tr");
            tr.classList.add("cliente");

            tr.appendChild(criaTd(dados.cliente, "nome"));
            tr.appendChild(criaTd(dados.produto, "produto"));
            tr.appendChild(criaTd(dados.qtde, "qtde"));
            tr.appendChild(criaTd(dados.unitario, "unitario"));
            tr.appendChild(criaTd("", "total"));

            return tr;
        }

        // Captura os dados do formulário
        function obterEncomenda(form) {
            return {
                cliente: form.nome.value,
                produto: form.produto.value,
                qtde: form.qtde.value,
                unitario: form.unitario.value,
            };
        }

        // -------------------------------
        // Cálculo e validação das tabelas
        // -------------------------------
        function recalcularTabela() {
            const linhas = root.querySelectorAll(".cliente");

            linhas.forEach((linha) => {
                const tdQtde = linha.querySelector(".qtde");
                const tdUnit = linha.querySelector(".unitario");
                const tdTotal = linha.querySelector(".total");

                const qtdeBruta = tdQtde.textContent;
                const unitBruta = tdUnit.textContent;

                const qtdeNum = parseFloat(limparValor(qtdeBruta));
                const unitNum = parseFloat(limparValor(unitBruta));

                linha.classList.remove("qtde-invalida");
                linha.classList.remove("valor-invalido");

                // valida quantidade
                if (isNaN(qtdeNum) || qtdeNum < 1) {
                    tdQtde.textContent = "Quantidade inválida";
                    tdUnit.textContent = "--";
                    tdTotal.textContent = "";
                    linha.classList.add("qtde-invalida");
                    return;
                }

                // valida valor unitário
                if (isNaN(unitNum) || unitNum < 1) {
                    tdUnit.textContent = "Valor inválido";
                    tdQtde.textContent = "--";
                    tdTotal.textContent = "";
                    linha.classList.add("valor-invalido");
                    return;
                }

                tdUnit.textContent = formataValor(unitNum);
                tdTotal.textContent = calculaTotal(qtdeNum, unitNum);
            });
        }

        // -------------------------------
        // EVENTOS
        // -------------------------------

        // Adicionar nova encomenda
        function handleAdicionar(e) {
            e.preventDefault();
            const nova = obterEncomenda(form);
            const novaLinha = montaLinha(nova);
            tabela.appendChild(novaLinha);
            form.reset();
            recalcularTabela();
        }

        // Filtrar encomendas
        function handleFiltro() {
            const linhas = root.querySelectorAll(".cliente");
            const filtro = this.value.toLowerCase();

            linhas.forEach((linha) => {
                const nome = linha.querySelector(".nome").textContent.toLowerCase();
                linha.classList.toggle("invisivel", !nome.startsWith(filtro));
            });
        }

        // Remover por duplo clique
        function handleRemove(e) {
            const linha = e.target.closest("tr");
            if (!linha || !linha.classList.contains("cliente")) return;

            linha.classList.add("fadeOut");
            setTimeout(() => linha.remove(), 300);
        }

        // -------------------------------
        // Inicialização
        // -------------------------------
        recalcularTabela();

        botaoAdicionar.addEventListener("click", handleAdicionar);
        campoFiltro.addEventListener("input", handleFiltro);
        tabelaMaior.addEventListener("dblclick", handleRemove);

        return () => {
            botaoAdicionar.removeEventListener("click", handleAdicionar);
            campoFiltro.removeEventListener("input", handleFiltro);
            tabelaMaior.removeEventListener("dblclick", handleRemove);
        };
    }, []);


    return (
        <main ref={rootRef}>
            <h2 className="encomendas-item">Encomendas 📦</h2>
            <p>Acompanhe as encomendas abaixo.</p>

            <section className="container">
                <h1>Lista de encomendas</h1>

                <label>Filtrar</label>
                <input
                    type="text"
                    id="buscar"
                    className="busca"
                    placeholder="Digite a encomenda que deseja buscar"
                />

                <table>
                    <thead>
                        <tr>
                            <th>Nome</th>
                            <th>Produtos</th>
                            <th>Quantidade</th>
                            <th>Valor Unitário</th>
                            <th>Total</th>
                        </tr>
                    </thead>

                    <tbody id="tabela-cliente">
                        <tr className="cliente">
                            <td className="nome">Zé</td>
                            <td className="produto">Filtro de ar comum</td>
                            <td className="qtde">X</td>
                            <td className="unitario">49.90</td>
                            <td className="total"></td>
                        </tr>

                        <tr className="cliente">
                            <td className="nome">Chico</td>
                            <td className="produto">Velas de ignição</td>
                            <td className="qtde">2</td>
                            <td className="unitario">119.90</td>
                            <td className="total"></td>
                        </tr>

                        <tr className="cliente">
                            <td className="nome">Kaique</td>
                            <td className="produto">Filtro de óleo</td>
                            <td className="qtde">3</td>
                            <td className="unitario">39.90</td>
                            <td className="total"></td>
                        </tr>

                        <tr className="cliente">
                            <td className="nome">Roberval</td>
                            <td className="produto">Óleo</td>
                            <td className="qtde">6</td>
                            <td className="unitario">X</td>
                            <td className="total"></td>
                        </tr>
                    </tbody>
                </table>
            </section>

            <section>
                <h1>Adicionar nova encomenda</h1>
                <form id="adicionar-encomenda" className="adicionar-encomenda">
                    <div className="grupo1">
                        <div className="bl_nome">
                            <label>Nome</label>
                            <input
                                type="text"
                                name="nome"
                                id="nome"
                                required
                                placeholder="Digite o nome do(a) cliente"
                            />
                        </div>

                        <div className="bl_qtde">
                            <label>Qtde</label>
                            <input
                                type="number"
                                name="qtde"
                                id="qtde"
                                required
                                placeholder="Digite a quantidade de encomendas"
                            />
                        </div>

                        <div className="bl_prodt">
                            <label>Produto</label>
                            <select name="produto" id="produto" required>
                                <option>Selecione</option>
                                <option>Velas de ignição</option>
                                <option>Filtro de ar comum</option>
                                <option>Bateria</option>
                                <option>Filtro de óleo</option>
                                <option>Óleo</option>
                                <option>Reservatório de expansão</option>
                                <option>Bomba de combustível</option>
                                <option>Bomba d'água</option>
                                <option>Pastilhas de freio</option>
                            </select>
                        </div>

                        <div className="bl_unit">
                            <label>R$ Unitário</label>
                            <input
                                type="text"
                                name="unitario"
                                id="unitario"
                                required
                                placeholder="Digite o valor unitário do produto"
                            />
                        </div>
                    </div>

                    <button id="adicionar" className="bt_adicionar">
                        Adicionar
                    </button>
                </form>
            </section>
        </main>
    );
}