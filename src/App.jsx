
import './App.css'
import { createContext, useState } from "react";
import ReactSwitch from "react-switch";
import Dalle from './components/Dalle/Dalle';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';


export const ThemeContext = createContext(null);

function App() {

  
  
  return (
  
      <div>
        <Header/>
        <Dalle/>
        <Footer />
        
      
          
          
        
      </div>
    
  )
}

export default App;
