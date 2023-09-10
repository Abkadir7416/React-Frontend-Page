import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Home from "./components/Home";
import Footer from "./components/Footer";
import Contact from "./components/Contact";
import Services from "./components/Services";

import './styles/App.css';
import './styles/header.css'
import './styles/home.css'
import './styles/Footer.css'
import './styles/Contact.css'
import './styles/mediaquery.css'

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contacts" element={<Contact />}/>
        <Route path="/services" element={<Services />} /> 
      </Routes>
      <Footer />

    </Router>
  );
}

export default App;
