import React from 'react'; 
import './App.css';

function App() {
  
  const [alertActive, setAlertActive] = React.useState(false);

  const triggerSOS = () => {
    setAlertActive(true);
    
    setTimeout(() => {
      setAlertActive(false);
    }, 5000);
  };

  return (
    <div className="app-container">
      <nav className="navbar">
        <h2 className="logo">SAYE</h2>
      </nav>

      <main className="hero">
        <h1>Your Safety, Our Shadow.</h1>
        <div className="sos-section">
          <button 
            className={alertActive ? "sos-btn pulse" : "sos-btn"} 
            onClick={triggerSOS}
          >
            {alertActive ? "SENDING..." : "SOS"}
          </button>
          
          {alertActive && (
            <p className="status-msg">⚠️ Emergency Alert Sent!</p>
          )}
        </div>
      </main>
    </div>
  );
}

export default App;
