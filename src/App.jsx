import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import ItemDetailContainer from "./components/ItemDetailsConteiner/ItemDetailsConteiner";
import NavBar from "./components/Navbar/NavBar";
import Footer from "./components/Footer/Footer";
import Contacto from "./components/Contacto/Contacto";
import Ubicacion from "./components/Ubicacion/Ubicacion";
import Cart from "./components/Cart/Cart";
import Error from "./components/Error/Error";
import Checkout from "./components/Checkout/Checkout";
import { Carousel } from "react-bootstrap";
import { CartProvider } from "./Context/CartContext";

function App() {   

  return (
    <>
      <BrowserRouter>
        <CartProvider>
          <NavBar />

          <Carousel>
            <Carousel.Item>
              <img
                className="carousel-image"
                src="/img/bahco.png"
                alt="Imagen 1"
              />
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="carousel-image"
                src="/img/biassoni.jpg"
                alt="Imagen 2"
              />
            </Carousel.Item>
          </Carousel>

          <Routes>
            <Route path="/" element={<ItemListContainer />} />
            <Route path="/Contacto" element={<Contacto />} />
            <Route path="/Ubicacion" element={<Ubicacion />} />
            <Route path="/Cart" element={<Cart />} />
            <Route path="/Checkout" element={<Checkout />} />
            <Route path="/item/:idProduct" element={<ItemDetailContainer />} />
            <Route path="/:categoryId" element={<ItemListContainer />} />
            <Route path="/Checkout" element={<Checkout/>}/>
            <Route path="*" element={<Error />} />
          </Routes>

          <Footer />
        </CartProvider>
      </BrowserRouter>
    </>
  );
}

export default App;
