import React from 'react';
import { Link } from 'react-router-dom';
import NavbarStyles from './Navabar.module.css'



//Chon hich stati ehtiaj nadarim az functional components estefade mikonim
const Navbar = () => {
  return (
    <>
        <header className={NavbarStyles.header}>
        <div className={NavbarStyles.listContainer}>
            <ul className={NavbarStyles.list}>
                <li><Link to="/">HOME</Link></li>
                <li><Link to="/Products">PRODUCTS</Link></li>
                <li><Link to="">SHOP</Link></li>
                <li><Link to="">BLOG</Link></li>
                <li><Link to="">CONTACT</Link></li>
                <li><Link to="/aboutus">ABOUT</Link></li>
            </ul>
        </div>
        <div className={NavbarStyles.User}>
          <span>USER</span>
        </div>
     </header>
    </>

  );
};

export default Navbar;
