import React, { useState } from 'react';
import { scriptData } from "./data/gameData";

function App() {
  const [role, setRole] = useState(null); // 'initiator', 'gatekeeper', or 'neutral'
  const [currentNode, setCurrentNode] = useState('start');
  const [stats, setStats] = useState({ tradition: 0, agency: 0 });

  const handleRoleSelect = (selectedRole) => {
    setRole(selectedRole);
    setCurrentNode('start');
  };

  const handleChoice = (option) => {
    if (option.nextNode === 'reset') {
      setRole(null);
      setStats({ tradition: 0, agency: 0 });
      setCurrentNode('start');
      return;
    }
    setStats({
      tradition: stats.tradition + option.impact.tradition,
      agency: stats.agency + option.impact.agency
    });
    setCurrentNode(option.nextNode);
  };

  // 1. Role Selection Screen
  if (!role) {
    return (
      <div style={{ padding: '40px', textAlign: 'center', fontFamily: 'Arial', backgroundColor: '#1a1a1a', color: 'white', minHeight: '100vh' }}>
        <h1>Script-Breaker: Choose Your Perspective</h1>
        <p>How would you like to experience the Sexual Script?</p>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '15px', alignItems: 'center', marginTop: '30px' }}>
          <button onClick={() => handleRoleSelect('initiator')} style={btnStyle}>Play as the Initiator (Traditional Male Role)</button>
          <button onClick={() => handleRoleSelect('gatekeeper')} style={btnStyle}>Play as the Gatekeeper (Traditional Female Role)</button>
          <button onClick={() => handleRoleSelect('neutral')} style={btnStyle}>Gender-Neutral / Script-Free</button>
        </div>
      </div>
    );
  }

  const node = scriptData[role][currentNode];
  const getWidth = (val) => Math.max(0, Math.min(val * 2, 100)) + "%";

  // 2. Main Game Screen
  return (
    <div style={{ padding: '40px', textAlign: 'center', fontFamily: 'Arial', backgroundColor: '#1a1a1a', color: 'white', minHeight: '100vh' }}>
      <h1>Script-Breaker Engine ({role.toUpperCase()})</h1>

      <div style={{ margin: '20px auto', maxWidth: '500px', background: '#333', padding: '20px', borderRadius: '15px' }}>
        <div style={{ marginBottom: '15px' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '14px' }}>
            <span>Traditional Norms:</span> <span>{stats.tradition} pts</span>
          </div>
          <div style={{ background: '#555', height: '25px', borderRadius: '5px', overflow: 'hidden' }}>
            <div style={{ background: '#ff4d4d', height: '100%', width: getWidth(stats.tradition), transition: '0.5s', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              {stats.tradition > 5 ? stats.tradition : ""}
            </div>
          </div>
        </div>
        <div>
          <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '14px' }}>
            <span>Personal Agency:</span> <span>{stats.agency} pts</span>
          </div>
          <div style={{ background: '#555', height: '25px', borderRadius: '5px', overflow: 'hidden' }}>
            <div style={{ background: '#4dff88', color: '#000', height: '100%', width: getWidth(stats.agency), transition: '0.5s', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              {stats.agency > 5 ? stats.agency : ""}
            </div>
          </div>
        </div>
      </div>

      <div style={{ background: '#fff', color: '#333', padding: '30px', borderRadius: '20px', maxWidth: '600px', margin: '0 auto' }}>
        <p style={{ fontSize: '1.2rem' }}>{node.text}</p>
        {node.options.map((opt, i) => (
          <button key={i} onClick={() => handleChoice(opt)} style={gameBtnStyle}>{opt.text}</button>
        ))}
      </div>
    </div>
  );
}

const btnStyle = { padding: '15px 30px', width: '350px', cursor: 'pointer', borderRadius: '10px', border: 'none', backgroundColor: '#646cff', color: 'white', fontWeight: 'bold' };
const gameBtnStyle = { display: 'block', width: '100%', padding: '15px', margin: '10px 0', cursor: 'pointer', borderRadius: '10px', border: 'none', backgroundColor: '#444', color: 'white' };

export default App;