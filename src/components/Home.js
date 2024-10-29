import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css';

function Home() {
  return (
    <div className='container-home'>
      <div className="card-background">
        <img 
          src="https://cdn3.futbin.com/content/fifa22/img/players/p117643888.png?fm=png&ixlib=java-2.1.0&w=172&s=e736e33e9f71c23ac4e0ba133439e2fa" 
          alt="Jogador" 
          className="player-icon" 
        />
        <Link to="/dashboard">
          <button>Começar</button>
        </Link>
      </div>
    </div>
  );
}

export default Home;
