import React, { Component } from 'react';
import './Category.css';
import Card from './Card';

class Roulette extends Component {

  render() {
    return (
      <div className="roulette">
        {this.props.selectedCards.map((card) => {
          return <Card clickHandler={this.props.clickHandler} key={card.id} card={card} />
        })}
      </div>
    );
  }
}

export default Roulette;
