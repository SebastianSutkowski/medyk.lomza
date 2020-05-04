import React, { Component } from 'react';
import './OfferSection.css';
import taekwondo from '../images/taekwondo.jpg';
import crossfit from '../images/crossfit.jpg';
import { NavLink } from 'react-router-dom';
class OfferSection extends Component {
   state = {
      offers: [
         {
            img: taekwondo,
            title: 'taekwondo',
            description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima illo dicta dolorem quos numquam corrupti excepturi. Id rem, magnam sequi eos, tenetur veritatis architecto, illo iusto delectus deleniti voluptates totam?            Voluptas aliquid, molestias neque suscipit dignissimos repudiandae temporibus repellat reiciendis mollitia et itaque harum magnam inventore nemo asperiores omnis blanditiis fugit adipisci odio officiis quos esse. Sapiente rem sint nesciunt.            Quam necessitatibus voluptate odit nostrum incidunt accusantium nemo deserunt aliquam rem ipsa nisi quasi, sapiente provident omnis eos, iure reprehenderit repellat officiis vitae qui quidem asperiores molestias quibusdam! Delectus, saepe.            Omnis delectus nesciunt veniam sit est, in porro hic totam iure amet temporibus velit. Eos at ullam deserunt nostrum iure saepe ut mollitia veritatis nam vero, neque accusantium, perferendis repellendus?            Sit beatae natus, provident, minus modi quae, deleniti enim eveniet at ut doloribus praesentium quibusdam soluta magnam numquam reprehenderit molestias harum eius sunt aliquam ullam laborum! Eum accusamus quod cum?'
         },
         {
            img: taekwondo,
            title: 'indoorcycling',
            description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima illo dicta dolorem quos numquam corrupti excepturi. Id rem, magnam sequi eos, tenetur veritatis architecto, illo iusto delectus deleniti voluptates totam?            Voluptas aliquid, molestias neque suscipit dignissimos repudiandae temporibus repellat reiciendis mollitia et itaque harum magnam inventore nemo asperiores omnis blanditiis fugit adipisci odio officiis quos esse. Sapiente rem sint nesciunt.            Quam necessitatibus voluptate odit nostrum incidunt accusantium nemo deserunt aliquam rem ipsa nisi quasi, sapiente provident omnis eos, iure reprehenderit repellat officiis vitae qui quidem asperiores molestias quibusdam! Delectus, saepe.            Omnis delectus nesciunt veniam sit est, in porro hic totam iure amet temporibus velit. Eos at ullam deserunt nostrum iure saepe ut mollitia veritatis nam vero, neque accusantium, perferendis repellendus?            Sit beatae natus, provident, minus modi quae, deleniti enim eveniet at ut doloribus praesentium quibusdam soluta magnam numquam reprehenderit molestias harum eius sunt aliquam ullam laborum! Eum accusamus quod cum?'
         },
         {
            img: crossfit,
            title: 'crossfit',
            description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima illo dicta dolorem quos numquam corrupti excepturi. Id rem, magnam sequi eos, tenetur veritatis architecto, illo iusto delectus deleniti voluptates totam?            Voluptas aliquid, molestias neque suscipit dignissimos repudiandae temporibus repellat reiciendis mollitia et itaque harum magnam inventore nemo asperiores omnis blanditiis fugit adipisci odio officiis quos esse. Sapiente rem sint nesciunt.            Quam necessitatibus voluptate odit nostrum incidunt accusantium nemo deserunt aliquam rem ipsa nisi quasi, sapiente provident omnis eos, iure reprehenderit repellat officiis vitae qui quidem asperiores molestias quibusdam! Delectus, saepe.            Omnis delectus nesciunt veniam sit est, in porro hic totam iure amet temporibus velit. Eos at ullam deserunt nostrum iure saepe ut mollitia veritatis nam vero, neque accusantium, perferendis repellendus?            Sit beatae natus, provident, minus modi quae, deleniti enim eveniet at ut doloribus praesentium quibusdam soluta magnam numquam reprehenderit molestias harum eius sunt aliquam ullam laborum! Eum accusamus quod cum?'
         },
         {
            img: taekwondo,
            title: 'reebok run crew',
            description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima illo dicta dolorem quos numquam corrupti excepturi. Id rem, magnam sequi eos, tenetur veritatis architecto, illo iusto delectus deleniti voluptates totam?            Voluptas aliquid, molestias neque suscipit dignissimos repudiandae temporibus repellat reiciendis mollitia et itaque harum magnam inventore nemo asperiores omnis blanditiis fugit adipisci odio officiis quos esse. Sapiente rem sint nesciunt.            Quam necessitatibus voluptate odit nostrum incidunt accusantium nemo deserunt aliquam rem ipsa nisi quasi, sapiente provident omnis eos, iure reprehenderit repellat officiis vitae qui quidem affffsperiores molestias quibusdam! Delectus, saepe.            Omnis delectus nesciunt veniam sit est, in porro hic totam iure amet temporibus velit. Eos at ullam deserunt nostrum iure saepe ut mollitia veritatis nam vero, neque accusantium, perferendis repellendus?            Sit beatae natus, provident, minus modi quae, deleniti enim eveniet at ut doloribus praesentium quibusdam soluta magnam numquam reprehenderit molestias harum eius sunt aliquam ullam laborum! Eum accusamus quod cum?'
         },
         {
            img: taekwondo,
            title: 'wybierz sport',
            description: 'aby dowiedzieć się więcej o naszej ofercie wybierz sport z panelu nawigacji'
         }
      ]
   }
   handleClick = () => {
      document.querySelector('.offerDescription h1').classList.toggle('show');
      document.querySelector('.offerDescription p').classList.toggle('show');
      setTimeout(function () {
         document.querySelector('.offerDescription h1').classList.toggle('show')

         document.querySelector('.offerDescription p').classList.toggle('show')
      }, 300)
   }
   checkIndex = () => {
      let i = this.state.offers.length - 1
      this.state.offers.map((element, index) => {
         if (element.title == this.props.location.pathname.split('/')[2]) {
            i = index
            return index
         }
      })
      return i
   }

   componentDidMount() {
      let varia = window.scrollY
      document.querySelector('.singleOfferInfo').classList.add('show')
      document.querySelectorAll('.offerBelt ul li a').forEach(element => {
         element.addEventListener('click', this.handleClick)
      });
      window.scrollTo(0, 0);
   }
   render() {

      return (

         <>
            <div className="offerContent">
               <div className="offerBelt">
                  <ul>
                     {
                        this.state.offers.map((element, index) => {
                           if (index === this.state.offers.length - 1) {
                              return null
                           }
                           else {
                              return <li key={element.title}><NavLink to={`/oferta/${element.title}`}>{element.title}</NavLink></li>
                           }
                        })
                     }
                  </ul>
               </div>
               <div className="singleOfferInfo">
                  <img src={this.state.offers[this.checkIndex()].img} alt={`${this.state.offers[this.checkIndex()].img}`} />
                  <div className="offerDescription">
                     <h1>{this.state.offers[this.checkIndex()].title}</h1>
                     <p>{this.state.offers[this.checkIndex()].description}</p>
                  </div>
               </div>
            </div>
            <article className="joinUs">
               <h1>Dołącz do nas!</h1>
               <p>Skorzystaj z bogatej oferty klubu już dziś. Skontaktuj się z nami w razie pytań, bądź od razu przyjdź na pierwszy darmowy trening!</p>
               <button><span>kontakt</span></button>
            </article>
         </>
      );
   }
}

export default OfferSection;

