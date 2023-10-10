import React, { useState, useRef, useEffect } from "react";
import "./App.css";
import { Sidebar, Navbar } from "./components/index";
import { Routes, Route, useLocation } from "react-router-dom";
import { HomePage, CreateExchange, EditExchange } from "./Pages/index";
import { getCurrentLocation } from "./utils/utils";
import { exchangesData } from "./data";

function App() {
  const [active, setActive] = useState(false);
  const [currentLocation, setCurrentLocation] = useState();
  const mainWidthRef = useRef();
  const location = useLocation();
  const [exchanges, setExchanges] = useState([]);

  useEffect(() => {
    setCurrentLocation(getCurrentLocation(location.pathname));
  }, [location.pathname]);

  useEffect(() => {
    fetch("http://localhost:7000/app-v1/exchanges/all")
      .then((response) => response.json())
      .then((data) => setExchanges(data))
      .catch((err) => setExchanges(exchangesData));
  }, [exchanges]);

  const toggleActiveState = () => {
    setActive(!active);
  };
  return (
    <div className="app">
      <div className="sidebar" ref={mainWidthRef}>
        <Sidebar setActive={toggleActiveState} active={active} />
      </div>
      <div className="main">
        <Navbar
          active={active}
          setActive={toggleActiveState}
          currentLocation={currentLocation}
        />
        <Routes>
          <Route exact path="/" element={<HomePage data={exchanges} />} />
          <Route exact path="/create-exchange" element={<CreateExchange />} />
          <Route exact path="/edit-exchange" element={<EditExchange />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
