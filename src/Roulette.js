import React, { Component } from 'react';
import './Roulette.css';
import Card from './Card';

class Roulette extends Component {

  formatTitle(str){
    return str.split("-")[1].replace(/\w\S*/g, function(txt){return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();});
  }

  render() {
    return (
      <div className="roulette">
        {this.props.selectedCards.map((card) => {
          //returns a properly titled category
          let category = this.formatTitle(card.category);
          return ([
            <div className="roulette-child">
              <p>{category}</p>
              <Card clickHandler={this.props.clickHandler} key={card.id} card={card} />
            </div>
          ])
        })}
      </div>
    );
  }
}

export default Roulette;
