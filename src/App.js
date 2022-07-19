import './App.css';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Home from './components/pages/Home';
import Services from './components/pages/Services';
import Products from './components/pages/Products';
import SignUp from './components/pages/SignUp';

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/React_website_layout" element={<Home />} exact />
          <Route path="/services" element={<Services />} exact />
          <Route path="/products" element={<Products />} exact />
          <Route path="/sign-up" element={<SignUp />} exact />
        </Routes>
      </Router>
    </>
  );
}

export default App;
