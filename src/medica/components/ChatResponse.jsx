import React from 'react';

const ChatResponse = ({ response }) => {
  return (
    <div>
      {response.previsoes.map((previsao, index) => (
        <div key={index}>
          <h4>{previsao.doenca}:</h4>
          <p>
            {Math.round(previsao.probabilidade * 100)}% 
            <input 
              type="range" 
              className="percent-range" 
              min="0" 
              max="100" 
              value={Math.round(previsao.probabilidade * 100)} 
              id="range-input" 
              disabled
            />
          </p>
        </div>
      ))}
      <p>{response.explicacao}</p>

      <h4>Casos Similares:</h4>
      <ul>
        {response.casos_similares.map((caso, index) => (
        <div className='card'>
          <li key={index}>
            <ul>
              <li><i className="bi bi-capsule-pill"></i> {caso.doenca}:</li>
              <ul> {caso.medicacao}</ul>
              <ul> {caso.examesrealizados}</ul>
            </ul>
          </li>
        </div>
        ))}
      </ul>
    </div>
  );
};

export default ChatResponse;
