import React from 'react';
import giphy from '../images/giphy.gif';
import logo from '../images/logo.png';
import crossfit from '../images/crossfit.jpg';
import taekwondo from '../images/taekwondo.jpg';
import dumbell from '../images/dumbell.jpg';
import { Link } from 'react-router-dom';
import './Home.css';
import Offer from './Offer/Offer'
import AboutUs from './AboutUs/AboutUs'
import WhyUs from './WhyUs/WhyUs'
import ContactUs from './ContactUs/ContactUs'
import Slider from 'react-animated-slider';
import 'react-animated-slider/build/horizontal.css';
const slides = [
   { title: 'crossfit', description: 'oferta', photo: crossfit },
   { title: 'Taekwondo', description: 'oferta', photo: taekwondo },
   { title: 'indoor cycling', description: 'oferta', photo: giphy },
   { title: 'Third item', description: 'oferta', photo: dumbell }
];
const Home = () => {

   return (
      <>
         <Slider
            slider={'slider'}
            duration={1000}
            autoplay={4000}
            touchDisabled={true}
         >
            {slides.map((slide, index) => <div key={index}>
               <section className="topOfSection">
                  <img src={slide.photo} alt="img1" />
                  <h1>{slide.title}</h1>
                  <Link to="/oferta/taekwondo"><button>{slide.description}</button></Link>
               </section>
            </div>)}
         </Slider >
         <AboutUs />
         <Offer />
         <WhyUs />
         <ContactUs />
      </>

   );



}

export default Home;