import React from 'react'; // React ko import kiya
import './App.css';

function App() {
  // Error yahan tha: Humne React.useState likh kar isse fix kar diya
  const [alertActive, setAlertActive] = React.useState(false);

  const triggerSOS = () => {
    setAlertActive(true);
    // 5 seconds baad alert off ho jaye
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