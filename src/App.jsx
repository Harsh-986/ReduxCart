import "./App.css";
import Home from "./pages/home/Home.jsx";
import {BrowserRouter as Router, Routes , Route} from 'react-router-dom'
import Register from "./pages/register/Register.jsx";
import Login from "./pages/login/Login.jsx";
import AllProducts from "./pages/all products/AllProducts.jsx";
import SingleProduct from "./pages/single product/SingleProduct.jsx";
import Cart from "./pages/cart/Cart.jsx";

function App() {
  return (
      <Router>
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/register" element ={<Register />} />
          <Route path="/login" element ={<Login />} />
          <Route path="/products" element ={<AllProducts />} />
          <Route path="/products/:id" element ={<SingleProduct />} />
          <Route path="/cart" element ={<Cart />} />
        </Routes>
      </Router>
  )
}
export default App;
