import { useState } from 'react';
import './App.css'
import MyComponent from './components/MyComponent'
import Title from './components/Title';

function App() {
  const n = 15;
  const [name] = useState('arthur');
  const redtitle = true;


  return (
    <>
      <div className='App'>
        <h1>React com CSS</h1>
        <MyComponent/>

        {/* Inline CSS */}
        <p style={{color: "yellow"}}>Este elemento foi estilizado inline</p>

        {/* Inline Dinamico */}
        <h2 style={n < 10 ? {color:"purple"} : {color:"pink"}}>CSS Dinamico</h2>
        <h2 style={n > 10 ? {color:"purple"} : {color:"pink"}}>CSS Dinamico</h2>
        <h2 
        style={
          name === "arthur" ? {color:"green"} : undefined}
        >
          CSS Dinamico
        </h2>

        {/* lasse Dinamica */}
        <h2 className={redtitle ? "red-title" : "title"}>Este título contem classe dinamica</h2>

        {/* CSS Modules */}
        <Title/>

      </div>
    </>
  )
}

export default App
