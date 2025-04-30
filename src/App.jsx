import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from './components/header';
import Navbar from './components/navbar';
import Card from './components/card';
import Model from './components/model';
import Mobile from './components/mobile';
import Footer from './components/footer';
import Shop from './pages/shop/shop';
import Like from './pages/like/like';
import { CartProvider } from './pages/CartContext/index'; 

function App() {
  return (
    <CartProvider>
      <Router>
        <Header />
        <Navbar />
        <Routes>
          <Route path="/" element={
            <>
              <Card />
              <Model />
              <Mobile />
            </>
          } />
          <Route path="/shop" element={<Shop />} />
          <Route path="/like" element={<Like />} />
        </Routes>
        <Footer />
      </Router>
    </CartProvider>
  );
}

export default App;
