// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'

// function App() {
//   const [count, setCount] = useState(0)

//   return (
//     <>
//       <div>
//         <a href="https://vite.dev" target="_blank">
//           <img src={viteLogo} className="logo" alt="Vite logo" />
//         </a>
//         <a href="https://react.dev" target="_blank">
//           <img src={reactLogo} className="logo react" alt="React logo" />
//         </a>
//       </div>
//       <h1>Vite + React</h1>
//       <div className="card">
//         <button onClick={() => setCount((count) => count + 1)}>
//           count is {count}
//         </button>
//         <p>
//           Edit <code>src/App.jsx</code> and save to test HMR
//         </p>
//       </div>
//       <p className="read-the-docs">
//         Click on the Vite and React logos to learn more
//       </p>
//     </>
//   )
// }

// export default App



import React, { useEffect, useState } from 'react';

function App() {
  const [settings, setSettings] = useState({ company_name: '', company_phone: '' });
  const [loading, setLoading] = useState(true);
  const [message, setMessage] = useState('');

  useEffect(() => {
    fetch(`${elmSettings.apiUrl}settings`, {
      headers: {
        'X-WP-Nonce': elmSettings.nonce,
      }
    })
      .then(res => res.json())
      .then(data => {
        setSettings(data);
        setLoading(false);
      });
  }, []);

  const handleChange = (e) => {
    setSettings({ ...settings, [e.target.name]: e.target.value });
  };

  const handleSave = () => {
    fetch(`${elmSettings.apiUrl}settings`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'X-WP-Nonce': elmSettings.nonce,
      },
      body: JSON.stringify(settings),
    })
      .then(res => res.json())
      .then(data => setMessage(data.message));
  };

  if (loading) return <p>Loading...</p>;

  return (
    <div style={{ padding: '20px' }}>
      <h2>Electric Lineman Settings</h2>

      {message && <div style={{ color: 'green', marginBottom: '10px' }}>{message}</div>}

      <label>
        Company Name:
        <input
          type="text"
          name="company_name"
          value={settings.company_name}
          onChange={handleChange}
        />
      </label>
      <br /><br />

      <label>
        Company Phone:
        <input
          type="text"
          name="company_phone"
          value={settings.company_phone}
          onChange={handleChange}
        />
      </label>
      <br /><br />

      <button onClick={handleSave}>Save Settings</button>
    </div>
  );
}

export default App;

