import React from 'react';
import './Footer.css';
import { NavLink } from 'react-router-dom';
const Footer = () => {
   return (
      <>
         <div className="footerContent">
            <div className="footerBox">
               <h1>Kontakt</h1>
               <p>
                  Aleja Legionów 107a <br />
                  18-400 Łomża
               </p>
               <br />
               <p>
                  tel:  667 110 350
               </p>
            </div>
            <div className="footerBox">
               <h1>Menu</h1>
               <ul>
                  <li><NavLink to="/" exact activeClassName="active">Start</NavLink></li>
                  <li><NavLink to="/oferta" activeClassName="active" >Oferta</NavLink></li>
                  <li><NavLink to="/contact" activeClassName="active" >Kontakt</NavLink></li>
                  <li><NavLink to="/about" activeClassName="active" >O nas</NavLink></li>
                  <li><NavLink to="/actual" activeClassName="active" >Aktualności</NavLink></li>
               </ul>
            </div>
            <div className="footerBox">
               <h1>Śledź nas</h1>
               <i className="fab fa-facebook-square"></i>
               <i className="fab fa-instagram"></i>
            </div>
         </div>
         <div className="Copyrights">
            Copyrights © 2020  <a href="https://github.com/sebo9611" target='_blank'>Sebastian Sutkowski</a>
         </div>
      </>
   );
}

export default Footer;
