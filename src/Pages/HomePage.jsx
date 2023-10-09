import React from 'react'
import './styles.css'
import Box from '@mui/material/Box';
import { HeaderCard } from '../components';


const HomePage = ({currentLocation}) => {
  return (
       <Box className="home">
       <Box className="home__header">
       <HeaderCard/>
       </Box>
        </Box> 
  )
}

export default HomePage