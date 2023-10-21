import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import "bootstrap/dist/css/bootstrap.min.css";
import Navigation from './components/Navigation.js';
import About from './components/About.js';
import LogIn from './components/LogIn.js';

function App() {
  return (
    <div className="App">
      <Router>
        <Navigation />
        <Routes>
          <Route path="/log-in" element={<LogIn />} />
        </Routes>
      </Router>
      <header class="main-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1 class="app-name">
          Welcome to Tutr!
        </h1>
        <p class="app-description">
          The premier website for connecting students with tutors online.
        </p>
      </header>
      <Router>
        <About />
      </Router>
      <footer>
        © 2023 Sunny Bapla, Issac Johnson, Anh Tuyet Vo
      </footer>
    </div>
  );
}

export default App;
