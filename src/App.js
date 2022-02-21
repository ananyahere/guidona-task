import './App.css'
import {BrowserRouter as Router } from 'react-router-dom'
import Routes from './components/utils/Routes'
import Navbar from './components/utils/Navbar';

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes />
      </Router>
    </div>
  );
}

export default App;
