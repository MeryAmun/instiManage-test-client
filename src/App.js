import React, { useState,useRef,useEffect } from 'react'
import './App.css';
import { Sidebar, Navbar } from './components/index';
import { Routes, Route,useLocation} from 'react-router-dom'
import { HomePage,CreateExchange } from './Pages/index';
import { getCurrentLocation } from './utils/utils';


function App() {
  const [active, setActive] = useState(false)
  const [currentLocation, setCurrentLocation] = useState()
  const mainWidthRef = useRef();
  const location =useLocation();
  console.log(currentLocation)

  useEffect(() => {
   setCurrentLocation(getCurrentLocation(location.pathname))
  }, [location.pathname])
  



const toggleActiveState = () => {
  setActive(!active)
}
  return (
    <div className="app">
      <div className="sidebar" ref={mainWidthRef}>
       <Sidebar setActive={toggleActiveState} active={active}/>
      </div>
      <div className="main">
       <Navbar active={active} setActive={toggleActiveState} currentLocation={currentLocation}/>
       <Routes>
        <Route exact path="/" element={<HomePage />}/>
        <Route exact path="/create-exchange" element={<CreateExchange />}/>
      </Routes>
      </div>
    </div>
  );
}

export default App;
