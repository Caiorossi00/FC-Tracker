import React from 'react';

function Historico({ historico }) {
  return (
    <div>
      <h2>Histórico de Partidas</h2>
      <ul>
        {historico.map((partida, index) => (
          <li key={index}>
          {partida.resultado} - Gols Marcados: {partida.golsMarcados}, Gols Sofridos: {partida.golsSofridos}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Historico;
