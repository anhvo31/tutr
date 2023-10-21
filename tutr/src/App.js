import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header class="main-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1 class="app-name">
          Welcome to Tutr!
        </h1>
        <p class="app-description">
          The premier website for connecting students with tutors online.
        </p>
      </header>
      <footer>
        © 2023 Sunny Bapla, Issac Johnson, Anh Tuyet vo
      </footer>
    </div>
  );
}

export default App;
