import React, { Component } from 'react';
import './Card.css';

class Card extends Component {

  render() {

    return (
      <div className="card">
        <p className="name">{this.props.card.name}</p>
        <p className="description">{this.props.card.description}</p>
        {this.props.card.examples !== "" &&
          <p className="examples">{this.props.card.examples}</p>
        }
        {this.props.card.source !== "" &&
          <p className="source">Source: {this.props.card.source}</p>
        }
      </div>
    );
  }
}

export default Card;
