import React from 'react';
import './App.css';
import Header from './component/component.jsx';
import Example from './mic.jsx';

function App1() {
    return (
      <>
      <Header></Header>
      <video controls>
        <source  src="intro.mp4" type="video/mp4"/>
      </video>
      <Example></Example>
      
      </>
    );
  }
  
  
  export default App1;
