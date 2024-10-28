import React from 'react';

function Estatisticas({
  golsMarcados,
  golsSofridos,
  partidasJogadas,
  partidasRestantes,
  vitorias,
  derrotas,
}) {
  const taxaVitoria = partidasJogadas > 0 ? (vitorias / partidasJogadas) * 100 : 0;
  const saldoGols = golsMarcados - golsSofridos;

  return (
    <div>
      <h2>Estatísticas de Gols</h2>
      <p>Gols Marcados: {golsMarcados}</p>
      <p>Gols Sofridos: {golsSofridos}</p>
      <p>Saldo de Gols: {saldoGols}</p>
      <p>Taxa de Vitória: {taxaVitoria.toFixed(2)}%</p>
      <p>Partidas a Jogar: {partidasRestantes}</p>
    </div>
  );
}

export default Estatisticas;
