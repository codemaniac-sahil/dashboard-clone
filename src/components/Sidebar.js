import React from 'react'
import { RiDashboardFill } from 'react-icons/ri'
import { FaDatabase } from 'react-icons/fa'
import { FaNetworkWired } from 'react-icons/fa'
import { IoCheckmarkDoneCircleSharp } from 'react-icons/io5'
import { MdHelp } from 'react-icons/md'
import { AiTwotoneSetting } from 'react-icons/ai'
import { IoPersonCircle } from 'react-icons/io5'



function Sidebar() {
  return (
    <>
    <div className='sidebar'>
       
            <ul className='top-icon'>
                <li>Logo </li>
                <li><RiDashboardFill/></li>
                <li><FaDatabase/></li>
                <li><FaNetworkWired/></li>
                <li><IoCheckmarkDoneCircleSharp/></li>
            </ul>
          
                <ul className='bottom-icon'>
                    <li><MdHelp/></li>
                    <li><AiTwotoneSetting/></li>
                    <li><IoPersonCircle/></li>
                </ul>
          

       
    </div>
    </>
  )
}

export default Sidebar