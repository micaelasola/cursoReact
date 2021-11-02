import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Mi primera app E-commerce en React.
        </p>
        <a
          className="App-link"
          href="https://github.com/micaelasola/cursoReact"
          target="_blank"
          rel="noopener noreferrer"
        >
          Link a Github :) .
        </a>
      </header>
    </div>
  );
}

export default App;
