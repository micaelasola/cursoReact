import "./styles.css";
import NavBar from "./components/NavBar";
import "bootstrap/dist/css/bootstrap.min.css";
import { ItemListContainer } from "./components/ItemListContainer/ItemListContainer";
import {ItemDetailContainer} from "./components/ItemDetailContainer/ItemDetailContainer";
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>

      <NavBar />

      <Routes>

        <Route path="/" element={  <ItemListContainer /> } ></Route>
        
        <Route path="/productos/:cartId" element={  <ItemListContainer /> }></Route>
        <Route path="/detail/:itemId" element={<ItemDetailContainer/> }></Route>
       

      </Routes>

    </BrowserRouter>
  );
}

export default App;
