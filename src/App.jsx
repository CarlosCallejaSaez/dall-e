
import './App.css'
import { createContext, useState } from "react";
import ReactSwitch from "react-switch";
import Clock from './components/Clock';
import Dalle from './components/Dalle';




export const ThemeContext = createContext(null);

function App() {

  
  
  return (
  
      <div>
        <Clock/>
        <Dalle/>
      
          
          
        
      </div>
    
  )
}

export default App;
