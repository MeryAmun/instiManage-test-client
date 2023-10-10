import React from "react";
import Paper from "@mui/material/Paper";
import "./styles.css";
import {
  BsFillBellFill,
  BsBoxArrowLeft,
  BsBoxArrowRight,
} from "react-icons/bs";
import { FaUserCircle } from "react-icons/fa";
import Box from "@mui/material/Box";

import { TiPlus } from "react-icons/ti";
import { Link } from 'react-router-dom'


const Navbar = ({ active, setActive, currentLocation }) => {
  return (
    <div className="navbar__container">
      <Paper elevation={2} className="navbar">
        <div className="navbar__toggle">
          {active ? (
            <BsBoxArrowRight
              color="rgb(3, 3, 53)"
              size={25}
              onClick={setActive}
            />
          ) : (
            <BsBoxArrowLeft
              color="rgb(3, 3, 53)"
              size={25}
              onClick={setActive}
            />
          )}
        </div>
        <div className="navbar__user">
          <BsFillBellFill color="rgb(3, 3, 53)" size={15} />
          <div className="user">
            <FaUserCircle color="rgb(3, 3, 53)" size={15} />
            <div className="user__block">
              <select name="" id="">
                <option value="name">John Thomson</option>
              </select>
              <span>Admin</span>
            </div>
          </div>
        </div>
      </Paper>
      <Box className="navbar__header">
        <h2 className="navbar__title">{currentLocation}</h2>
        {
          currentLocation ==="Exchanges" && (
            <Link  to="/create-exchange"  className="navbar__btn">
          <TiPlus size={20} color="#fff" />
          New {currentLocation}
        </Link>
          )
        }
      </Box>
    </div>
  );
};

export default Navbar;
