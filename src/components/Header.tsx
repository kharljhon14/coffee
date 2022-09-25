import React from "react";

function Header() {
   return (
      <header className="header">
         <h1 className="header__logo">Coffee Life</h1>
         <div className="header__burger">
            <div className="header__burger-line"></div>
            <div className="header__burger-line"></div>
            <div className="header__burger-line"></div>
         </div>
         <nav className="header__nav">
            <ul className="header__nav-list">
               <li className="header__nav-item">
                  <a href="/">Home</a>
               </li>
               <li className="header__nav-item">
                  <a href="/">About Us</a>
               </li>
               <li className="header__nav-item">
                  <a href="/">Try our Coffee</a>
               </li>
               <li className="header__nav-item">
                  <a href="/">Contact Us</a>
               </li>
            </ul>
         </nav>
      </header>
   );
}

export default Header;
