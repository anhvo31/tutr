import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import "bootstrap/dist/css/bootstrap.min.css";
import Navigation from './components/Navigation.js';
import HomePage from './components/HomePage.js';
import About from './components/About.js';
import LogIn from './components/LogIn.js';

function App() {
  return (
    <div className="App">
      <Router>
        <Navigation />
        <Routes>
          <Route path="/" element={<HomePage />} />
        </Routes>
        <Routes>
          <Route path="/log-in" element={<LogIn />} />
        </Routes>
      </Router>
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
