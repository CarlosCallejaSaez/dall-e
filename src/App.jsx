
import './App.css'
import { createContext, useState } from "react";
import ReactSwitch from "react-switch";
import Dalle from './components/Dalle/Dalle';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import YoutubeEmbed from './components/YoutubeEmbed/YoutubeEmbed';


export const ThemeContext = createContext(null);

function App() {

  
  
  return (
  
      <div>
        <Header/>
        <Dalle/>
<div className='yt-cont'>
        <p style={{color:"blue"}}><strong><u>
        FOR THIS DEMO VERSION, YOU HAVE HERE A DEMO VIDEO
        </u>
        </strong>
      </p>
      </div>
      <YoutubeEmbed embedId="MPyZf1S5U_0" />
        <Footer />
        
      
          
          
        
      </div>
    
  )
}

export default App;
