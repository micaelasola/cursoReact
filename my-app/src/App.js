import "./styles.css";
import NavBar from "./components/NavBar";
import "bootstrap/dist/css/bootstrap.min.css";
import { ItemListContainer } from "./components/ItemListContainer/ItemListContainer";
import {ItemDetailContainer} from "./components/ItemDetailContainer/ItemDetailContainer";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { AppRouter } from './router/AppRouter';

function App() {
  return (
    <BrowserRouter>

      <NavBar />

      <AppRouter />

    </BrowserRouter>
  );
}

export default App;
