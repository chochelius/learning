import { Route, Routes } from 'react-router-dom';
import Home from '../pages/Home.jsx';
import About from '../pages/About.jsx';
import Signup from '../pages/Signup.jsx';
import Checkout from '../pages/Checkout.jsx';

const AppRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/checkout" element={<Checkout />} />
    </Routes>
  );
}

export default AppRouter