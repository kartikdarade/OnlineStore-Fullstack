import './App.css';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';
import ProductDetails from './pages/ProductDetails';
import Navbar from './components/Navbar';
import Cart from './pages/Cart';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path = "/" element = {<Home/>} />
        <Route path = "/Login" element = {<Login/>} />
        <Route path = "/Cart" element = {<Cart/>} />
        <Route path = "/Register" element = {<Register/>} />
        <Route path = "/product/:id" element = {<ProductDetails />} />    
      </Routes>
    </Router>
  );
}

export default App;
