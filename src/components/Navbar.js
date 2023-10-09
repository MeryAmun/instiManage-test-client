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
import Button from "@mui/material/Button";
import { TiPlus } from "react-icons/ti";

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
          <BsFillBellFill color="rgb(3, 3, 53)" size={20} />
          <div className="user">
            <FaUserCircle color="rgb(3, 3, 53)" size={25} />
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
        <Button variant="contained" className="navbar__btn">
          <TiPlus size={20} color="#fff" />
          {currentLocation}
        </Button>
      </Box>
    </div>
  );
};

export default Navbar;
