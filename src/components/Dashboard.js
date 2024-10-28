import React, { useState } from 'react';
import Estatisticas from './Estatisticas';
import Historico from './Historico';

function Dashboard() {
  const [vitorias, setVitorias] = useState(0);
  const [derrotas, setDerrotas] = useState(0);
  const [golsMarcados, setGolsMarcados] = useState(0);
  const [golsSofridos, setGolsSofridos] = useState(0);
  const [historico, setHistorico] = useState([]);
  const [modalAberto, setModalAberto] = useState(false);
  const [golsInput, setGolsInput] = useState({ marcados: 0, sofridos: 0 });

  // Novas estatísticas
  const [penaltis, setPenaltis] = useState(0);
  const [prorrogacao, setProrrogacao] = useState(0);
  const [rageQuits, setRageQuits] = useState(0);
  const [entregadas, setEntregadas] = useState(0);
  const [disconnects, setDisconnects] = useState(0);

  const maxPartidas = 15;
  const partidasJogadas = vitorias + derrotas;
  const partidasRestantes = maxPartidas - partidasJogadas;

  // Função para determinar o rank baseado nas vitórias
  const getRank = () => {
    if (vitorias >= 15) return 'Rank 1';
    if (vitorias >= 13) return 'Rank 2';
    if (vitorias >= 11) return 'Divisão 3';
    if (vitorias >= 10) return 'Divisão 4';
    if (vitorias >= 9) return 'Divisão 5';
    if (vitorias >= 8) return 'Divisão 6';
    if (vitorias >= 7) return 'Divisão 7';
    if (vitorias >= 6) return 'Rank 8';
    if (vitorias >= 4) return 'Rank 9';
    if (vitorias >= 2) return 'Rank 10';
    return 'Sem Rank';
  };

  const adicionarPartida = () => {
    const { marcados, sofridos } = golsInput;
    const resultado = marcados > sofridos ? "Vitória" : "Derrota";

    if (marcados > sofridos) {
      setVitorias(vitorias + 1);
    } else {
      setDerrotas(derrotas + 1);
    }
    setGolsMarcados(golsMarcados + marcados);
    setGolsSofridos(golsSofridos + sofridos);

    // Adiciona a partida ao histórico
    setHistorico([
      ...historico,
      {
        resultado,
        golsMarcados: marcados,
        golsSofridos: sofridos,
      },
    ]);

    setGolsInput({ marcados: 0, sofridos: 0 });
    setModalAberto(false);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setGolsInput({ ...golsInput, [name]: Number(value) });
  };

  return (
    <div>
      <h1>Estatísticas da Weekend League</h1>
      <p>Vitórias: {vitorias}</p>
      <p>Derrotas: {derrotas}</p>
      <p>Partidas a Jogar: {partidasRestantes}</p>
      <h2>Você está no: {getRank()}</h2>

      <button onClick={() => setModalAberto(true)}>Adicionar Partida</button>

      {modalAberto && (
        <div className="modal">
          <h2>Adicionar Partida</h2>
          <label>
            Gols Marcados:
            <input
              type="number"
              name="marcados"
              value={golsInput.marcados}
              onChange={handleInputChange}
            />
          </label>
          <label>
            Gols Sofridos:
            <input
              type="number"
              name="sofridos"
              value={golsInput.sofridos}
              onChange={handleInputChange}
            />
          </label>
          <button onClick={adicionarPartida}>Registrar Partida</button>
          <button onClick={() => setModalAberto(false)}>Fechar</button>
        </div>
      )}

      <Estatisticas
        golsMarcados={golsMarcados}
        golsSofridos={golsSofridos}
        partidasJogadas={partidasJogadas}
        partidasRestantes={partidasRestantes}
        vitorias={vitorias}
        derrotas={derrotas}
      />

      <div>
        <h2>Outras Estatísticas</h2>
        <p>Pênaltis: {penaltis}</p>
        <button onClick={() => setPenaltis(penaltis + 1)}>Adicionar Pênalti</button>

        <p>Prorrogações: {prorrogacao}</p>
        <button onClick={() => setProrrogacao(prorrogacao + 1)}>Adicionar Prorrogação</button>

        <p>Rage Quits: {rageQuits}</p>
        <button onClick={() => setRageQuits(rageQuits + 1)}>Adicionar Rage Quit</button>

        <p>Entregadas: {entregadas}</p>
        <button onClick={() => setEntregadas(entregadas + 1)}>Adicionar Entregada</button>

        <p>Disconnects: {disconnects}</p>
        <button onClick={() => setDisconnects(disconnects + 1)}>Adicionar Disconnect</button>
      </div>

      <Historico historico={historico} />
    </div>
  );
}

export default Dashboard;
