import React from 'react'
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import { FcFactory } from 'react-icons/fc'
import './headerCard.css'
import { ImInsertTemplate } from 'react-icons/im';

const HeaderCard = ({data}) => {
  return (
    <Paper elevation={3} className='header__card'>
      <Box className="header__card-items">
        <span className='header__item-amount' style={{color:data.color}}>{data.number}</span>
        <span className='header__card-item'>{data.transaction}</span>
      </Box>
     <Box className="header__card-icons">
    {  <data.iconSmall size={13} className='small-icon' color={data.id ===4 ? "gray" : ""}/>}
      <FcFactory size={40}/>
      </Box> 
      </Paper>
  )
}

export default HeaderCard