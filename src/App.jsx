import React from 'react'
import Home from "./Pages/Home/home"
import "./main";
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';

const App = () => {
  return (
    <div>
      <Router>
      <Header />
        <Routes>
          <Route path='/' element={  <Home />} />
        </Routes>
        <Footer />  
      </Router>
      
    
   
    </div>
  )
}

export default App