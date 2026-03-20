import React, { useState } from 'react';
import { scriptData } from './gameData';

function App() {
  const [currentNode, setCurrentNode] = useState('start');
  const [stats, setStats] = useState({ tradition: 0, agency: 0 });

  const handleChoice = (option) => {
    setStats({
      tradition: stats.tradition + option.impact.tradition,
      agency: stats.agency + option.impact.agency
    });
    setCurrentNode(option.nextNode);
  };

  const node = scriptData[currentNode];

  return (
    <div style={{ padding: '40px', textAlign: 'center' }}>
      <h1>Script-Breaker</h1>
      <p>{node.text}</p>
      {node.options.map((opt, i) => (
        <button key={i} onClick={() => handleChoice(opt)} style={{ margin: '10px' }}>
          {opt.text}
        </button>
      ))}
      <div style={{ marginTop: '50px' }}>
        <p>Tradition Score: {stats.tradition}</p>
        <p>Personal Agency Score: {stats.agency}</p>
      </div>
    </div>
  );
}