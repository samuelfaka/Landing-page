import React from 'react'
import Home from "./components/Pages/home/home"
import "./main";
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Info from './components/intro/Info';
import Banner from './components/Banner/Banner';
import Up from './components/Up/Up';

const App = () => {
  return (
    <div>
      <Router>
      <Header />
      <Up />
      <Info />
        <Routes>
          <Route path='/' element={  <Home />} />
        </Routes>
        <Banner />
        <Footer />  
      </Router>
      
    
   
    </div>
  )
}

export default App