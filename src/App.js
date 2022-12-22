
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Landing from './components/Landing';
import Home from './components/Home';
import About from './components/About';
import Navbar from './components/Navbar';
import Lost from './components/Lost';
import Cart from './components/Cart';
import Footer from './components/Footer';
import SinglePage from './components/Single-Page';
import Payment from './components/Payment';
import Thanks from './components/Thanks';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path='/' element={<Landing />} />
        <Route path='/home' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/cart' element={<Cart />} />
        <Route path="/home/:proid" element={<SinglePage />} />
        <Route path="/pay/:proid" element={<Payment />} />
        <Route path="/thank" element={<Thanks />} />
        <Route path='*' element={<Lost />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
