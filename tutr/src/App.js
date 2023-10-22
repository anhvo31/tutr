import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import "bootstrap/dist/css/bootstrap.min.css";
import Navigation from './components/Navigation.js';
import HomePage from './components/HomePage.js';
import About from './components/About.js';
import LogIn from './components/LogIn.js';
import Register from './components/Register.js';
import Teacher_Search from './components/Teacher_Search.js';
import Teachers from './components/Teachers.js';


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
        <Routes>
          <Route path="/register" element={<Register />} />
        </Routes>
      </Router>

      <Router>
        <Teacher_Search />
        <Routes>
        <Route path="/Teachers" element={<Teachers />} />
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
