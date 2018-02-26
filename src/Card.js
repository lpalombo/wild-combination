import React, { Component } from 'react';
import './Card.css';

class Card extends Component {
  render() {
    return (
      <div className="card">
        <p className="category">{this.props.card.category}</p>
        <p className="name">{this.props.card.name}</p>
        <p className="description">{this.props.card.description}</p>
        <p className="examples">Examples: {this.props.card.examples}</p>
        <p className="source">Source: {this.props.card.source}</p>
      </div>
    );
  }
}

export default Card;
