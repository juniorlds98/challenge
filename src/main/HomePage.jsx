import React from 'react';
import { Link } from 'react-router-dom';

function HomePage() {
  return (
    <div className="p-4">
      <h1>Bem-vindo à Home</h1>
      <Link to="/estoque/lote" className="btn btn-primary mt-3">
        Ir para Lote
      </Link>
    </div>
  );
}

export default HomePage;
