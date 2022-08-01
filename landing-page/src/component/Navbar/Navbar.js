import React from 'react';
import NavbarStyles from './Navabar.module.css'



//Chon hich stati ehtiaj nadarim az functional components estefade mikonim
const Navbar = () => {
  return (
    <>
        <header className={NavbarStyles.header}>
        <div className={NavbarStyles.listContainer}>
            <ul className={NavbarStyles.list}>
                <li><a href='#'>HOME</a></li>
                <li><a href='#'>SHOP</a></li>
                <li><a href='#'>PROMO</a></li>
                <li><a href='#'>ABOUT</a></li>
                <li><a href='#'>BLOG</a></li>
                <li><a href='#'>CONTACT</a></li>
            </ul>
        </div>
     </header>
    </>

  );
};

export default Navbar;
