import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer"
import ItemDetailContainer from "./components/ItemDetailsConteiner/ItemDetailsConteiner"
import NavBar from "./components/Navbar/NavBar";
import Footer from "./components/Footer/Footer";
import Contacto from "./components/Contacto/Contacto";
import Ubicacion from "./components/Ubicacion/Ubicacion";
import Cart from "./components/Cart/Cart";

function App() {
  return (
    <>


        <BrowserRouter>
          <NavBar />

          <Routes>
            <Route path="/" element={<ItemListContainer />} />
            <Route path="/:categoryId" element={<ItemListContainer />} />
            <Route path="/item/:idProduct" element={<ItemDetailContainer />} />
            <Route path="/Contacto" element={<Contacto />} />
            <Route path="/Ubicacion" element={<Ubicacion />} />
            <Route path="/Cart" element={<Cart />} />
            <Route path="*" element={<Error />} />
          </Routes>

          <Footer />
  </BrowserRouter>
      
    </>
  );
}

export default App;