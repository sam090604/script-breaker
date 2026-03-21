import React, { useState } from 'react';
import { scriptData } from "./data/gameData";

function App() {
  const [view, setView] = useState('intro'); // 'intro', 'selection', or 'game'
  const [role, setRole] = useState(null);
  const [currentNode, setCurrentNode] = useState('start');
  const [stats, setStats] = useState({ tradition: 0, agency: 0 });

  const handleRoleSelect = (selectedRole) => {
    setRole(selectedRole);
    setView('game');
    setCurrentNode('start');
  };

  const handleChoice = (option) => {
    if (option.nextNode === 'reset') {
      setRole(null);
      setView('selection');
      setStats({ tradition: 0, agency: 0 });
      return;
    }
    setStats({
      tradition: stats.tradition + option.impact.tradition,
      agency: stats.agency + option.impact.agency
    });
    setCurrentNode(option.nextNode);
  };

  // --- VIEW 1: INTRO PAGE ---
  if (view === 'intro') {
    return (
      <div style={containerStyle}>
        <div style={cardStyle}>
          <h1 style={{ fontSize: '3rem', marginBottom: '10px' }}>Script-Breaker</h1>
          <h2 style={{ color: '#646cff', marginBottom: '30px' }}>A Sociological Simulation</h2>
          
          <div style={{ textAlign: 'left', lineHeight: '1.6', fontSize: '1.1rem', marginBottom: '40px' }}>
            <p>Welcome to <strong>Script-Breaker</strong>. This application is designed to explore <strong>Sexual Script Theory</strong>—the invisible cultural blueprints that dictate how we "should" act in romantic and sexual encounters.</p>
            <br />
            <p>Traditional scripts often assign rigid roles based on gender: the <strong>Initiator</strong> and the <strong>Gatekeeper</strong>. By navigating this simulation, you will see how choosing to follow or "break" these scripts affects your level of <strong>Personal Agency</strong> versus <strong>Cultural Tradition</strong>.</p>
          </div>

          <button onClick={() => setView('selection')} style={primaryBtnStyle}>
            Begin Simulation
          </button>
        </div>
      </div>
    );
  }

  // --- VIEW 2: ROLE SELECTION ---
  if (view === 'selection') {
    return (
      <div style={containerStyle}>
        <h1 style={{ marginBottom: '40px' }}>Choose Your Perspective</h1>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '15px', alignItems: 'center' }}>
          <button onClick={() => handleRoleSelect('initiator')} style={roleBtnStyle}>Play as the Initiator (Traditional Male Role)</button>
          <button onClick={() => handleRoleSelect('gatekeeper')} style={roleBtnStyle}>Play as the Gatekeeper (Traditional Female Role)</button>
          <button onClick={() => handleRoleSelect('neutral')} style={roleBtnStyle}>Gender-Neutral / Script-Free</button>
        </div>
      </div>
    );
  }

  // --- VIEW 3: MAIN GAME ---
  const node = scriptData[role][currentNode];
  const getWidth = (val) => Math.max(0, Math.min(val * 2, 100)) + "%";

  return (
    <div style={containerStyle}>
      <header style={{ marginBottom: '30px' }}>
        <span style={{ background: '#444', padding: '5px 15px', borderRadius: '20px', fontSize: '0.8rem' }}>
          PERSPECTIVE: {role.toUpperCase()}
        </span>
      </header>

      {/* Stats Dashboard */}
      <div style={statsContainerStyle}>
        <div style={{ marginBottom: '15px' }}>
          <div style={labelRowStyle}><span>Traditional Script:</span><span>{stats.tradition} pts</span></div>
          <div style={barBgStyle}>
            <div style={{ ...barFillStyle, background: '#ff4d4d', width: getWidth(stats.tradition) }}>
               {stats.tradition > 5 ? stats.tradition : ""}
            </div>
          </div>
        </div>
        <div>
          <div style={labelRowStyle}><span>Personal Agency:</span><span>{stats.agency} pts</span></div>
          <div style={barBgStyle}>
            <div style={{ ...barFillStyle, background: '#4dff88', color: '#000', width: getWidth(stats.agency) }}>
               {stats.agency > 5 ? stats.agency : ""}
            </div>
          </div>
        </div>
      </div>

      {/* Game Card */}
      <div style={gameCardStyle}>
        <p style={{ fontSize: '1.2rem', color: '#333' }}>{node.text}</p>
        <div style={{ marginTop: '25px' }}>
          {node.options.map((opt, i) => (
            <button key={i} onClick={() => handleChoice(opt)} style={gameBtnStyle}>{opt.text}</button>
          ))}
        </div>
      </div>
    </div>
  );
}

// --- STYLES ---
const containerStyle = { padding: '40px', textAlign: 'center', fontFamily: 'Arial, sans-serif', backgroundColor: '#1a1a1a', color: 'white', minHeight: '100vh', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' };
const cardStyle = { maxWidth: '700px', background: '#242424', padding: '50px', borderRadius: '20px', boxShadow: '0 20px 50px rgba(0,0,0,0.5)' };
const gameCardStyle = { background: '#fff', padding: '30px', borderRadius: '20px', maxWidth: '600px', width: '100%', boxShadow: '0 10px 30px rgba(0,0,0,0.5)' };
const statsContainerStyle = { width: '100%', maxWidth: '500px', background: '#333', padding: '20px', borderRadius: '15px', marginBottom: '30px' };
const barBgStyle = { background: '#555', height: '25px', borderRadius: '5px', overflow: 'hidden' };
const barFillStyle = { height: '100%', transition: '0.5s', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '12px', fontWeight: 'bold' };
const labelRowStyle = { display: 'flex', justifyContent: 'space-between', fontSize: '14px', marginBottom: '5px' };
const primaryBtnStyle = { padding: '15px 40px', fontSize: '1.2rem', cursor: 'pointer', borderRadius: '10px', border: 'none', backgroundColor: '#646cff', color: 'white', fontWeight: 'bold' };
const roleBtnStyle = { padding: '15px 30px', width: '350px', cursor: 'pointer', borderRadius: '10px', border: 'none', backgroundColor: '#646cff', color: 'white', fontWeight: 'bold' };
const gameBtnStyle = { display: 'block', width: '100%', padding: '15px', margin: '10px 0', cursor: 'pointer', borderRadius: '10px', border: 'none', backgroundColor: '#444', color: 'white', fontWeight: '500' };

export default App;