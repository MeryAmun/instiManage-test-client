import React from 'react'
import './styles.css'
import Box from '@mui/material/Box';
import { HeaderCard, TableCard } from '../components';
import { activeData } from '../data';
import { TiFilter } from 'react-icons/ti'
import { GrFormSearch } from 'react-icons/gr'
import { FaShareFromSquare } from 'react-icons/fa6'


const HomePage = ({ data }) => {
  return (
    <Box className="home">
      <Box className="home__header">
        {
          activeData.map((item) => (
            <HeaderCard data={item} key={item.id} />
          ))
        }
      </Box>
      <Box className="home__search-container">
        <Box className="home__search">
          <GrFormSearch size={20} color='gray' />
          <input type="text" placeholder='Search' className='home__search-input' />
        </Box>
        <span className="home__search-icon">
          <TiFilter size={20} color='gray' />
        </span>
        <span className="home__search-icon">
          <FaShareFromSquare size={20} color='gray' />
        </span>
      </Box>
      <Box className="home__table">
        <TableCard data={data} />
      </Box>
    </Box>
  )
}

export default HomePage