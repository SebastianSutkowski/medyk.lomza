import React, { Component } from 'react';
import './OfferRender.css';


class OfferRender extends Component {
   state = {
      id: 1,
      className: 'singleOffer'
   }
   className = () => {
      return `${this.state.className} ${(this.props.active) ? ' activeOffer' : ""}`
   }

   render() {
      return (
         <div className={`${this.state.className} ${(this.props.active) ? ' activeOffer' : ""}`}
            id={this.props.id}
            onClick={() => this.props.handleOfferClick(this.props.id)}>
            <p>{this.props.sportName}</p>
         </div>
      );
   }
}

export default OfferRender;