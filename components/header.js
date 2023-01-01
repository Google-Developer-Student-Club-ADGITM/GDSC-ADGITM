import hstyles from '../styles/Header.module.css'
import Image from 'next/image'
import logo from '../assets/GDSC-Logo.png'
// export default function navbar(){
//     return(
//         <nav>
//             <img src="./assets/GDSC-Logo.png" />
//             ghhsbh
//         </nav>

//     )
// }


// #####################################

import React from 'react'

export default function header () {
  return ( 
    <div className={hstyles.container}>
    <div className={hstyles.img_con}><Image  className={hstyles.logo} src={logo} alt='/' /><div className={hstyles.logo_text}>DSC ADGITM</div></div>
        <ul className={hstyles.list}>
          <li className={hstyles.lii}><a href='/'>HOME</a></li>
          <li className={hstyles.lii}><a href='/'>BLOGS</a></li>
          <li className={hstyles.lii}><a href='/'>PROJECT</a></li>
          <li className={hstyles.lii}><a href='/'>TEAMS</a></li>
          <li className={hstyles.lii}><a href='/'>CODE OF CONDUCT</a></li>
        </ul>
      <div className={hstyles.button_con}><a href='/'><button className={hstyles.button_join}>Join Us</button> </a></div>
    </div>
  )
}
