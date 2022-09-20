import logo from './logo.svg';
import './App.css';
import TopNav from './Components/TopNav';
import Home from './screens/Home';
import Order from './screens/Order';
import Favourites from './screens/Favourites';
import Contact from './screens/Contact';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Shop from './screens/Shop';


function App() {
  return (
    <Router>
      <Routes>
        <Route
          path="/"
          exact
          element={
          
              <Home />
            
          }
        />
        <Route
          path="/shop"
          element={
          
              <Shop />
            
          }
        />
        <Route
          path="/favorite"
          element={
         
              <Favourites/>
            
          }
        />
        <Route
          path="/order"
          element={
         
              <Order />
            
          }
        />
        <Route
          path="/contact"
          element={
              <Contact/>
            
          }
        />
        
      
      </Routes>
    </Router>
  );
}

export default App;
