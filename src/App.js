import React from 'react'
import "bootstrap/dist/css/bootstrap.min.css";
import StartingPage from './components/StartingPage';
import AdminLogin from './components/AdminLogin';
import AdminDashboard from './components/AdminDashboard'
import DownloadPage from './components/DownloadPage';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <AdminDashboard />
      </header>
    </div>
  );
}

export default App;
