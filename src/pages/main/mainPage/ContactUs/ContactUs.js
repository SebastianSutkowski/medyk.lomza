import React from 'react';
import './ContactUs.css'
const ContactUs = () => {
   return (
      <div className="contactUs">
         <div className="contactUsInfo">
            <span>spotkajmy się</span>
            <div className="contactContent">
               <div className="contactText">
                  <i className="fas fa-map-marker-alt"></i><br />
                  <p>
                     Aleja Legionów 107a <br />
                     18-400 Łomża <br />
                  </p>
               </div>
               <div className="contactText">
                  <i className="fas fa-phone-alt"></i><br />
                  <p>
                     667 110 350
                  </p>

               </div>
               <div className="contactText">
                  <i className="far fa-clock"></i>
                  <p>Poniedziałek - Piątek: 16.00 - 22.00</p>

               </div>
            </div>
         </div>
         <iframe title='dsad' src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2391.9235396366284!2d22.061572215926237!3d53.16541119594921!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x471e336bfd9cd651%3A0x8abc16242688511d!2sAkademia%20Sportu%20Medyk!5e0!3m2!1spl!2spl!4v1585130246053!5m2!1spl!2spl"></iframe>
      </div>
   );
}

export default ContactUs;

