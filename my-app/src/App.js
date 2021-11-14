import "./styles.css";
import NavBar from "./components/NavBar";
import "bootstrap/dist/css/bootstrap.min.css";
import ItemListContainer  from "./components/ItemListContainer/ItemListContainer.js";
import { Clicker } from "./components/Clicker/Clicker";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <NavBar />
        <ItemListContainer greeting="BIENVENIDOS" />
       
        <Clicker />
       
      </header>
    </div>
  );
}

export default App
