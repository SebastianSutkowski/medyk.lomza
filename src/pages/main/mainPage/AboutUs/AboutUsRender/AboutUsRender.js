import React from 'react';
import './AboutUsRender.css'
const AboutUsRender = (props) => {
   return (
      <div className="aboutUs">

         <div className="aboutImg">
            <figure><img src={props.img} alt={props.id} /></figure>
            <p>poznaj bliżej</p>
         </div>
         <h2>{props.header}</h2>
         <h3>{props.content}</h3>
      </div>
   );
}

export default AboutUsRender;