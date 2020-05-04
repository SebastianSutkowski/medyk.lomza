import React from 'react';
import './Timetable.css';
import dumbell from '../images/dumbell.jpg';
import reebok from '../images/reebok.png';

const Timetable = () => {
   return (
      <section className="TimetableSection" style={{ backgroundImage: `url('${dumbell}')` }}>
         <h1>grafik zajęć</h1>
         <article className="Timetable">
            <table>
               <thead>
                  <tr >
                     <th></th>
                     <th colSpan="2">poniedziałek</th>
                     <th colSpan="2">wtorek</th>
                     <th colSpan="2">środa</th>
                     <th colSpan="2">czwartek</th>
                     <th colSpan="2">piątek</th>
                     <th>sobota</th>
                  </tr>
               </thead>
               <tbody>
                  <tr className="firstRow">
                     <td></td>
                     <td>duża sala</td>
                     <td>mała sala</td>
                     <td>duża sala</td>
                     <td>mała sala</td>
                     <td>duża sala</td>
                     <td>mała sala</td>
                     <td>duża sala</td>
                     <td>mała sala</td>
                     <td>duża sala</td>
                     <td></td>
                     <td>boisko SP9</td>
                  </tr>
                  <tr>
                     <td>9:00</td>
                     <td></td>
                     <td></td>
                     <td></td>
                     <td></td>
                     <td></td>
                     <td></td>
                     <td></td>
                     <td></td>
                     <td></td>
                     <td></td>
                     <td className='runCrew'><img src={reebok} alt="reebok" /></td>
                  </tr>
                  <tr>
                     <td>16:00</td>
                     <td>crossfit teens</td>
                     <td></td>
                     <td className='tkdKids'>taekwondo <br />dzieci 4-6 lat</td>
                     <td></td>
                     <td>crossfit kids</td>
                     <td></td>
                     <td className='tkdKids'>taekwondo <br />dzieci 4-6 lat</td>
                     <td></td>
                     <td></td>
                     <td></td>
                     <td></td>
                  </tr>
                  <tr>
                     <td>17:00</td>
                     <td className='tkdJunior'>taekwondo <br />dzieci 9+ lat</td>
                     <td></td>
                     <td>taekwondo <br />dzieci 6-8 lat</td>
                     <td></td>
                     <td className='tkdJunior'>taekwondo <br />dzieci 9+ lat</td>
                     <td></td>
                     <td>taekwondo <br />dzieci 6-8 lat</td>
                     <td>FAT KILLER WORKOUT</td>
                     <td className='tkdJunior'>taekwondo <br />dzieci 9+ lat</td>
                     <td></td>
                     <td></td>
                  </tr>
                  <tr>
                     <td>18:00</td>
                     <td className="crossfit">crossfit</td>
                     <td>FAT KILLER WORKOUT</td>
                     <td className="crossfit">crossfit</td>
                     <td></td>
                     <td className="crossfit">crossfit</td>
                     <td></td>
                     <td className="crossfit">crossfit</td>
                     <td>indoor cycling + brzuch <br />HARD!</td>
                     <td className="crossfit">crossfit</td>
                     <td></td>
                     <td></td>
                  </tr>
                  <tr>
                     <td>19:00</td>
                     <td className="crossfit">crossfit</td>
                     <td>indoor cycling + brzuch</td>
                     <td className="crossfit">crossfit</td>
                     <td>indoor cycling + brzuch</td>
                     <td className="crossfit">crossfit</td>
                     <td>indoor cycling + pośladki</td>
                     <td className="crossfit">crossfit</td>
                     <td>indoor cycling + pośladki</td>
                     <td className="crossfit">crossfit</td>
                     <td></td>
                     <td></td>
                  </tr>
                  <tr>
                     <td>20:00</td>
                     <td>crossfit intro</td>
                     <td>indoor cycling + brzuch <br />light</td>
                     <td>crossfit intro</td>
                     <td></td>
                     <td>crossfit intro</td>
                     <td></td>
                     <td>crossfit intro</td>
                     <td>STRETCHING</td>
                     <td>crossfit intro</td>
                     <td></td>
                     <td></td>
                  </tr>
                  <tr>
                     <td>21:00</td>
                     <td className="crossfit">crossfiT</td>
                     <td></td>
                     <td className="crossfit">crossfit </td>
                     <td></td>
                     <td className="crossfit">crossfiT</td>
                     <td></td>
                     <td className="crossfit">crossfiT</td>
                     <td></td>
                     <td className="crossfit">crossfiT</td>
                     <td></td>
                     <td></td>
                  </tr>
               </tbody>
            </table>
         </article>
      </section>
   );
}

export default Timetable;