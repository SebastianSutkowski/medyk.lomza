import React, { Component } from 'react';
import './Offer.css'
import taekwondo from '../../images/taekwondo.jpg';
import crossfit from '../../images/crossfit.jpg';
import OfferRender from './OfferRender/OfferRender'

class AboutUs extends Component {
   state = {
      activeElement: 0,
      offers: [
         {
            id: 1,
            active: true,
            photo: taekwondo,
            sportName: 'taekwondo',
            text: 'Taekwondo to obecnie najliczniej uprawiana sztuka walki na świecie. Jest bardzo widowiskowym sportem, znanym z wysokich i szybkich kopnięć wykonywanych przez zawodników, które wymagają od nich wysokiej sprawności fizycznej. Pomimo że walka odbywa się w systemie full kontakt, jest najbezpieczniejszym sportem walki ze względu na liczne ochraniacze które ma na sobie zawodnik podczas walki. Taekwondo oprócz kształtowania charakteru, pozytywnie wpływa na zdrowie, pomaga utrzymać kondycję i ukształtować sylwetkę.',
         },
         {
            id: 2,
            active: false,
            photo: taekwondo,
            sportName: 'indorcycling',
            text: 'Zajęcia na rowerach  są to zajęcia grupowe, prowadzone przy odpowiedniej muzyce do wskazówek instruktora. Dzięki swoim nieskomplikowanym ruchom,może je wykonywac każdy bez względu na wiek, płeć czy stopień wytrenowania. Jest to najbezpieczniejsza forma treningu wszystkich układów, doskonała zarówno dla rehabilitacji, profilaktyki jak i treningu sportowego. Odpowiednio dobrana muzyka nie tylko reguluje tempo jazdy, ale pozwala zapomnieć o wykonywanym wysiłku. Czas trwania treningu około 50 min.',
         },
         {
            id: 3,
            active: false,
            photo: crossfit,
            sportName: 'crossfit',
            text: 'To uniwersalny zestaw ćwiczeń, które wykonywać mogą wszyscy. Sprawność i doświadczenie schodzą na drugi plan, bo w trakcie zajęć sami możemy wyznaczać sobie granice i modyfikować obciążenia. A tu zakres jest potężny i tym różni się chociażby od monotonnych i żmudnych treningów na siłowni. Crossfit obejmuje ogromną ilość ćwiczeń i dyscyplin – klasyczne treningi siłowe (m.in. ćwiczenia takie jak przysiady, martwy ciąg, podrzut, rwanie, wyciskopodrzut, podciąganie na drążku), treningi biegowe (wybieganie, rytmy, tempówki, interwały, podbiegi), elementy plyometryki (np. skoki, wieloskoki), pływanie, jazdę na rowerze,  wiosłowanie.',
         },
         {
            id: 4,
            active: false,
            photo: taekwondo,
            sportName: 'reebok run crew',
            text: 'Lorem ipsum, dolor siliiiiiiiiiiiiiiiiiit amet consectetur adipisicing elit. Enim a veritatis aut officiis cupiditate voluptate. Ducimus consequatur animi sequi id quisquam voluptatum eaque ab illo, voluptatem veritatis! Labore, voluptates voluptate!Tempore libero quis quisquam adipisci officia est deserunt nobis possimus non dolore et odio commodi, temporibus perferendis? Asperiores voluptatibus pariatur est perspiciatis cupiditate recusandae maiores. Minima sint ea sapiente itaque.',
         }
      ]
   }
   handleOfferClick = id => {
      const newState = []
      this.state.offers.map(offer => {
         if (offer.id === id) {
            offer.active = true
         } else {
            offer.active = false
         }
         return newState.push(offer)

      })
      this.setState({
         offers: newState
      })
      this.ToDisplay()
      const offer = [...document.querySelectorAll('.singleOffer')]
      for (let i = 0; i < offer.length; i++) {
         setTimeout(() => {
            offer[i].classList.add('show', 'showed')
         }, (0));
      }

   }
   offersToDisplay = () => this.state.offers.map(offer => {
      return <OfferRender
         key={offer.id}
         id={offer.id}
         sportName={offer.sportName}
         handleOfferClick={this.handleOfferClick}
         active={offer.active}
      />
   })



   ToDisplay = () => this.state.offers.map((offer, index) => {
      if (offer.active) {
         this.setState({
            activeElement: index
         })
      }
      return null
   })
   handleScroll = () => {
      const mac = [...document.querySelector('.page').children]
      mac.forEach((element) => {
         if (element.classList.contains("aboutBox")) {
            if (window.scrollY > (document.querySelector('.aboutBox').offsetTop)) {
               const offer = [...document.querySelectorAll('.singleOffer')]
               for (let i = 0; i < offer.length; i++) {
                  setTimeout(() => {
                     offer[i].classList.add('show')
                  }, (200 + i * 300));
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

         <div className="OfferBox" style={{ backgroundImage: `url('${this.state.offers[this.state.activeElement].photo}')` }}>
            <div className="OfferTitle">
               <h1>nasza oferta</h1>
            </div>
            <div className="offers">
               {this.offersToDisplay()}
            </div>
            <div className="offerDescription">
               <p className="sportParagraph">{this.state.offers[this.state.activeElement].text}</p>
               <button className="offerButton"><p>sprawdź ofertę</p></button>
            </div>

         </div>
      );
   }
}

export default AboutUs;





