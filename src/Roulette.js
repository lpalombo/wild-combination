import React, { Component } from 'react';
import Card from './Card';

class Roulette extends Component {

  render() {
    return (
      <div className="roulette">
        {this.props.selectedCards.map((card) => {
          return ([
            <div className="roulette-child">
              <Card clickHandler={this.props.clickHandler} key={card.id} card={card} />
            </div>
          ])
        })}
      </div>
    );
  }
}

export default Roulette;
