import React from 'react';
import { NavLink } from 'react-router-dom';
import './Navigation.css';

window.onclick = () => {
   const hamburgerElements = [...document.querySelectorAll('.hamburgerMenu ul li')]
   hamburgerElements.forEach(element => {
      element.addEventListener('click', () => {
         document.querySelector('.hamburgerIcon').classList.toggle('active')
         document.querySelector('.hamburgerMenu').classList.toggle('active')
      })
   });
}
const Navigation = () => {
   window.addEventListener('scroll', () => {
      const nav = document.querySelector('header nav')
      if (window.pageYOffset >= 10) {
         nav.classList.add("OnTop")
      } else {
         nav.classList.remove("OnTop")
      }
   });

   return (
      <nav>
         <div className="logo"><NavLink to="/" exact activeClassName="active"><span>Medyk</span></NavLink></div>
         <div className="menuList">
            <ul>
               <li><NavLink to="/" exact activeClassName="active">Start</NavLink></li>
               <li><NavLink to="/oferta" activeClassName="active" >Oferta</NavLink></li>
               <li><NavLink to="/contact" activeClassName="active" >Kontakt</NavLink></li>
               <li><NavLink to="/about" activeClassName="active" >O nas</NavLink></li>
               <li><NavLink to="/actual" activeClassName="active" >Grafik</NavLink></li>
            </ul>
         </div>

         <div className="hamburgerIcon" onClick={() => {
            document.querySelector('.hamburgerIcon').classList.toggle('active')
            document.querySelector('.hamburgerMenu').classList.toggle('active')
         }}>
            <div className="hamburgerBelt" id='e1'></div>
            <div className="hamburgerBelt" id='e2'></div>
            <div className="hamburgerBelt" id='e3'></div>

         </div>
         <div className="hamburgerMenu">
            <ul>
               <li><NavLink to="/" exact activeClassName="active">Start</NavLink></li>
               <li><NavLink to="/oferta" activeClassName="active" >Oferta</NavLink></li>
               <li><NavLink to="/contact" activeClassName="active" >Kontakt</NavLink></li>
               <li><NavLink to="/about" activeClassName="active" >O nas</NavLink></li>
               <li><NavLink to="/actual" activeClassName="active" >Grafik</NavLink></li>
            </ul>
         </div>
      </nav>
   );
}

export default Navigation;