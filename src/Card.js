import React, { Component } from 'react';
import './Card.css';

class Card extends Component {

  handleClick = () => { this.props.clickHandler(this.props.card)};

  render() {

    return (
      <button onClick={this.handleClick} className="card">
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
