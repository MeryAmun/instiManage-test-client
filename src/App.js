import React, { useState,useRef } from 'react'
import './App.css';
import { Sidebar} from './components/index';

function App() {
  const [toggleWidth, setToggleWidth] = useState(false);
  const mainWidthRef = useRef()

  const changeWidth = () => {
    mainWidthRef.current.style.width = "50px";
    mainWidthRef.current.style.transition = "width ease 0.31s";
    // mainApp.current.style.left = "0%";
    // mainApp.current.style.transition = "left ease 0.31s";
  };
  const prevWidth = () => {
    mainWidthRef.current.style.width = "150px";
    mainWidthRef.current.style.transition = "width ease 0.31s";
    // mainApp.current.style.left = "-50%";
    // mainApp.current.style.transition = "left ease 0.31s";
  };
console.log(mainWidthRef.current)
  const handleActive = () => {
    if (toggleWidth) {
      changeWidth();
      setToggleWidth((prev) => !prev);
    } else {
      prevWidth();
      setToggleWidth((prev) => !prev);
    }
  };

  return (
    <div className="app">
      <div className="sidebar" ref={mainWidthRef}>
       <Sidebar handleActive={handleActive} toggle={toggleWidth}/>
      </div>
      <div className="main">
        main
      </div>
    </div>
  );
}

export default App;
