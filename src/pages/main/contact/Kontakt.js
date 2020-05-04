import React, { Component } from 'react';
import './Kontakt.css';
import dumbell from '../images/dumbell.jpg';


class Kontakt extends Component {
   state = {}
   componentDidMount() {
      window.scrollTo(0, 0);
   }
   render() {
      return (
         <>
            <section className="contactSectionContent" style={{ backgroundImage: `url('${dumbell}')` }}>
               <h1>spotkajmy się</h1>
               <h2>dołącz do nas już dziś i razem zawalczmy o lepsze jutro!</h2>
               <article className="contactInfo">

                  <i className="fas fa-map-marker-alt"></i>
                  <p>
                     Aleja Legionów 107a <br />
   18-400 Łomża
   </p>
                  <i className="far fa-clock"></i>
                  <p>Poniedziałek - Piątek: 16.00 - 22.00</p>
                  <i className="fas fa-phone-alt"></i>
                  <p>667 110 350</p>



               </article>

            </section>
            <section className="contactMap">
               <iframe title='dsad' src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2391.9235396366284!2d22.061572215926237!3d53.16541119594921!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x471e336bfd9cd651%3A0x8abc16242688511d!2sAkademia%20Sportu%20Medyk!5e0!3m2!1spl!2spl!4v1585130246053!5m2!1spl!2spl"></iframe>
            </section>
         </>
      );
   }
}

export default Kontakt;