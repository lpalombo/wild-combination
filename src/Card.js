import React, { Component } from 'react';
import './Card.css';

class Card extends Component {

  formatCat(str){
    return str.split("-")[1];
  }
  formatTitle(str){
    return str.split("-")[1].replace(/\w\S*/g, function(txt){return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();});
  }

  handleClick = () => { this.props.clickHandler(this.props.card)};

  render() {

    let catClass = "card "+this.formatCat(this.props.card.category);
    let catTitle = this.formatTitle(this.props.card.category);

    return (
      <button onClick={this.handleClick} className={catClass}>
        <div className="cat"><span>{catTitle}</span></div>
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
