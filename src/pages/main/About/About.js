import React, { Component } from 'react';
import './About.css';
import team from '../images/team.jpg';
import pawel from '../images/paweł.png';

class About extends Component {
   state = {}
   componentDidMount() {
      window.scrollTo(0, 0);
   }
   render() {
      return (
         <>
            <section className="aboutClub" style={{ backgroundImage: `url('${team}')` }}>
               <h1>kim jesteśmy?</h1>
               <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis amet ut repudiandae beatae laudantium ad, distinctio alias fugit, reiciendis et consectetur at facere modi sapiente accusantium rem enim ipsum. Quaerat.
               Non, unde harum assumenda ea laudantium optio veritatis est? Quis ullam dolores dicta commodi dolorum officiis labore corporis deserunt non eos? Soluta magnam fugit veritatis voluptates totam molestias inventore distinctio?
               Sunt quidem praesentium vitae quis dolorem iure enim adipisci inventore cum temporibus ad mollitia molestias iusto, earum soluta amet eaque odit quisquam voluptatem tenetur corrupti tempora. Libero ad provident ea?
   necessitatibus sapiente?</p>
               <h1>co oferujemy?</h1>
               <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis amet ut repudiandae beatae laudantium ad, distinctio alias fugit, reiciendis et consectetur at facere modi sapiente accusantium rem enim ipsum. Quaerat.
               Non, unde harum assumenda ea laudantium optio veritatis est? Quis ullam dolores dicta commodi dolorum officiis labore corporis deserunt non eos? Soluta magnam fugit veritatis voluptates totam molestias inventore distinctio?
               Sunt quidem praesentium vitae quis dolorem iure enim adipisci inventore cum temporibus ad mollitia molestias iusto, earum soluta amet eaque odit quisquam voluptatem tenetur corrupti tempora. Libero ad provident ea?
   necessitatibus sapiente?</p>
            </section>

            <section className="ourTeam">
               <h1>poznaj bliżej naszą kadrę</h1>
               <article>
                  <div>
                     <h2>paweł remiszewski</h2>

                     <p>Trener II klasy taekwondo olimpijskiego, I Dan. Instruktor Indoor Cycling. Absolwent Akademii Wychowania Fizycznego w Poznaniu. ​Wielokrotny medalista Mistrzostw Polski w różnych kategoriach wagowych i wiekowych. Członek Kadry Olimpijskiej. Odznaczony medalem im. Bronisława Schwarca za wybitne osiągnięcia w sporcie. Pomimo krótkiej kariery trenerskiej, wyszkolił już kilku medalistów Mistrzostw Polski. Specjalizuje się w przygotowaniu specjalnym zawodników. Ponadto  nauczyciel akademicki.</p>
                  </div>

                  <img src={pawel} alt="pawel" />
               </article>
               <article>
                  <div><h2>jerzy miller</h2>

                     <p>Doktor nauk o kulturze fizycznej, specjalizujący się w efektywności procesu treningowego u sportowców oraz autor wielu prac naukowych podejmujących te zagadnienie. Trener klasy Mistrzowskiejw Taekwondo Olimpijskim, V Dan. Ukończył Akademie Wychowania Fizycznego w Warszawie, Poznaniu i Białej Podlaskiej. Wyszkolił wielu medalistów Mistrzostw Polski, członków kadr Narodowych oraz reprezentantów Kadr Olimpijskich w różnych kategoriach wiekowych i wagowych. Były trener kadry olimpijskiej w Taekwondo Olimpijskim, odznaczony licznymi orderami zasłużonego dla sportu polskiego. Przez 9 lat szkolił specjalną grupę antyterrorystyczną policji przy Komendzie Wojewódzkiej w Łomży.
</p></div>

                  <img src={pawel} alt="pawel" />
               </article>
               <article>
                  <div><h2>marta remiszewska</h2>

                     <p>Trener II klasy taekwondo olimpijskiego, I Dan. Instruktor Indoor Cycling. Absolwentka Akademii Wychowania Fizycznego w Poznaniu oraz doktorantka w Instytucie Sportu Akademii Wychowania Fizycznego w Warszawie., specjalizująca się w teorii treningu sportowego. Wielokrotna medalistka mistrzostw Polski w różnych kategoriach wagowych i wiekowych, członkini Kadry Narodowej Juniorów oraz Kadry Szkolenia Olimpijskiego. Odznaczona medalem im Bronisława Schwarca za wybitne osiągnięcia w sporcie.  Reprezentantka Polski podczas sztafety ze zniczem olimpijskim Londyn 2012. Specjalizuje się w kształtowaniu sprawności ogólnej zawodników. Pondto nauczyciel akademicki.</p></div>

                  <img src={pawel} alt="pawel" />
               </article>
            </section>
         </>
      );
   }
}

export default About;
