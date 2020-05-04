import React, { Component } from 'react';
import taekwondo from '../../images/taekwondo.jpg';
// import { Link } from 'react-router-dom';
import './AboutUs.css';
import AboutUsRender from './AboutUsRender/AboutUsRender';
// import { useLocation } from 'react-router-dom'

class AboutUs extends Component {
   state = {
      ourTeam: [
         {
            id: 1,
            header: "paweł remiszewski",
            content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem id rem magnam sapiente quos? Quas qui at atque amet harum porro! Eius ullam ipsa ad asperiores sapiente ea assumenda amet.",
            img: `${taekwondo}`
         },
         {
            id: 2,
            header: "marta remiszewska",
            content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem id rem magnam sapiente quos? Quas qui at atque amet harum porro! Eius ullam ipsa ad asperiores sapiente ea assumenda amet.",
            img: `${taekwondo}`
         },
         {
            id: 3,
            header: "jerzy miller",
            content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem id rem magnam sapiente quos? Quas qui at atque amet harum porro! Eius ullam ipsa ad asperiores sapiente ea assumenda amet.",
            img: `${taekwondo}`
         }
      ]
   }

   handleScroll = () => {
      const mac = [...document.querySelector('.page').children]
      mac.forEach((element) => {
         // console.log(element.classList.contains("aboutBox"))
         if (element.classList.contains("aboutBox")) {
            if (window.scrollY > (document.querySelector('.aboutTitle').offsetTop + 300)) {
               document.querySelector('.aboutBox').classList.add('show')
            }
         }
      });

   }
   componentDidMount() {
      window.addEventListener('scroll', this.handleScroll)
   }
   render() {
      const ourTeamDisplay = () => {
         return this.state.ourTeam.map(offer => {
            return <AboutUsRender key={offer.id} id={offer.id} header={offer.header} content={offer.content} img={offer.img} />
         })
      }
      return (
         <div className="aboutBox">
            <div className="aboutTitle"><h1>nasza kadra</h1></div>
            <div className="aboutContent">{ourTeamDisplay()}</div>
         </div>
      );
   }
}

export default AboutUs;