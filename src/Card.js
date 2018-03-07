import React, { Component } from 'react';
import './Card.css';

class Card extends Component {

  formatCar(str){
    return str.split("-")[1];
  }

  handleClick = () => { this.props.clickHandler(this.props.card)};

  render() {

    let comClass = "card "+this.formatCar(this.props.card.category);

    return (
      <button onClick={this.handleClick} className={comClass}>
        <p className="name">{this.props.card.name}</p>
        <p className="description">{this.props.card.description}</p>
        {this.props.card.examples !== "" &&
          <p className="examples">{this.props.card.examples}</p>
        }
        {this.props.card.source !== "" &&
          <p className="source">Source: {this.props.card.source}</p>
        }
      </button>
    );
  }
}

export default Card;
