import React from 'react';

const ranks = [
  { wins: 15 },
  { wins: 13 },
  { wins: 11 },
  { wins: 10 },
  { wins: 9 },
  { wins: 8 },
  { wins: 7 },
  { wins: 6 },
  { wins: 4 },
  { wins: 2 },
];

function RankDisplay({ wins }) {
  const currentRank = ranks.find(rank => rank.wins <= wins);

  return (
    <div className="rank-display">
      <h2>Você está no Rank: {currentRank ? currentRank.wins : 0} Wins</h2>
    </div>
  );
}

export default RankDisplay;
