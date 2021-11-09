import "./styles.css";
import NavBar from "./components/NavBar";
import { ItemListContainer } from './components/ItemListContainer/ItemListContainer.js';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <NavBar />
        <ItemListContainer greeting="Compra tus entradas aca"/>
        <p>
          App E-commerce en React.
        </p>
        <p style={{ border: "2px red solid" }}>
          
          What is Lorem Ipsum? 
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
