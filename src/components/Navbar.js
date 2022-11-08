import React from 'react'
import { BiSearch } from 'react-icons/bi'
import { BiExport } from 'react-icons/bi'

import {BiFilterAlt} from 'react-icons/bi'

import {AiOutlineCalendar} from 'react-icons/ai'


function Navbar() {
  return (
    <div className='navbar-header'>
        <div className='navbar-heading'>
            <p>Dashboard</p>
        </div>
        <div className='navbar-links'>
            <a href='#'>Export <BiExport/></a>
            <a href='#'>Saved Filters<BiFilterAlt/></a>
            <a href='#'>Now<AiOutlineCalendar/></a>
        </div>
        <div className='navbar-search'>
            <input type='text' placeholder='Search'/>
            <BiSearch id='search-icon'/>
        </div>
    </div>
  )
}

export default Navbar