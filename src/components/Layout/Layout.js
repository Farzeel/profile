import React, { useState } from 'react'
import "./Layout.css"
import {BsChevronDoubleLeft,BsChevronDoubleRight} from'react-icons/bs'
import Home from '../../pages/Home/Home'
import Menue from '../Menues/Menue'

const Layout = () => {
    const [toggle, settoggle] = useState(false);
    const HandleToggle = () => {
        settoggle(!toggle);
    }
  return (
    <>
      <div className='sidebarSection'>
        <div className={toggle ? 'sidebar':"toogleWidth"}>
            <div className='sidebarToggleIcon'>
                <p>
                    {toggle?<BsChevronDoubleLeft onClick={HandleToggle} size={30}/>:
                    <BsChevronDoubleRight onClick={HandleToggle} size={30}/>}
                </p>
            </div>
            <Menue toggle={toggle}/>
        </div>
        <div className='container adjustcontainer'>
            <Home/>
        </div>
      </div>

     
    </>
  )
}

export default Layout
