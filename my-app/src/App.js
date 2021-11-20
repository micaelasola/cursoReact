import "./styles.css";
import NavBar from "./components/NavBar";
import "bootstrap/dist/css/bootstrap.min.css";
import { ItemListContainer } from './components/ItemListContainer/ItemListContainer';
import { Clicker } from "./components/Clicker/Clicker";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <NavBar />
        <h2>BIENVENIDOS</h2>
        <ItemListContainer />
       
        <Clicker />
       
      </header>
    </div>
  );
}

export default App
