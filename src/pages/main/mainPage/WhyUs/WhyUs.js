import React, { Component } from 'react';
import './WhyUs.css'


class WhyUs extends Component {
   state = {
      reasons: [
         {
            id: 1,
            title: "doświadczenie",
            icon: 'fas fa-chart-line',
            text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore, qui suscipit accusantium expedita consequuntur possimus voluptatum voluptates ut doloribus. Rerum esse sunt quibusdam eveniet totam neque officia nam quod quidem.'
         },
         {
            id: 2,
            title: "pasja",
            icon: 'fas fa-running',
            text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore, qui suscipit accusantium expedita consequuntur possimus voluptatum voluptates ut doloribus. Rerum esse sunt quibusdam eveniet totam neque officia nam quod quidem.'
         },
         {
            id: 3,
            title: "atmosfera",
            icon: 'far fa-smile-beam',
            text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore, qui suscipit accusantium expedita consequuntur possimus voluptatum voluptates ut doloribus. Rerum esse sunt quibusdam eveniet totam neque officia nam quod quidem.'
         },
         {
            id: 4,
            title: "zdrowie",
            icon: 'fas fa-heartbeat',
            text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore, qui suscipit accusantium expedita consequuntur possimus voluptatum voluptates ut doloribus. Rerum esse sunt quibusdam eveniet totam neque officia nam quod quidem.'
         }
      ]
   }
   boxes = () => {
      return this.state.reasons.map(reason => {
         return (
            <div key={reason.id} className="whyUsBox">
               <i className={reason.icon}></i>
               <span>{reason.title}</span>
               <p>{reason.text}</p>
            </div>
         )
      }
      )
   }
   handleScroll = () => {
      const mac = [...document.querySelector('.page').children]
      mac.forEach((element) => {
         // console.log(element.classList.contains("aboutBox"))
         if (element.classList.contains("whyUsContent")) {
            if (window.outerWidth < 770) {
               [...document.querySelectorAll('.whyUsBox')].forEach(element => {
                  if (window.scrollY > (element.offsetTop - document.querySelector('.whyUsTitle').clientHeight - 1.5 * element.clientHeight)) {
                     element.classList.add('show')
                  }
               });
            } else {
               if (window.scrollY > document.querySelector('.whyUsBox').offsetTop - document.querySelector('.whyUsTitle').clientHeight - 2.5 * document.querySelector('.whyUsBox').clientHeight) {
                  const box = [...document.querySelectorAll('.whyUsBox')]
                  for (let i = 0; i < box.length; i++) {
                     setTimeout(() => {
                        box[i].classList.add('show')
                     }, (200 + i * 600));
                  }
               }
            }
         }
      });

   }
   componentDidMount() {
      window.addEventListener('scroll', this.handleScroll)
   }
   render() {
      return (
         <div className="whyUsContent">
            <div className="whyUsTitle">
               <h1>dlaczego my?</h1>
            </div>
            <div className="whyUsBoxes">
               {this.boxes()}
            </div>

         </div>
      );
   }
}

export default WhyUs;
