import React, { Component } from 'react';

import Card from './Card';

class RouletteBox extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedCard: {
        category: "",
        description:"",
        examples:"",
        id:"",
        name:"",
        source:""
      }
    };

    this.selectCard = this.selectCard.bind(this);
  }



  componentDidMount(){
    this.selectCard();
  }

  handleClick(e){
    selectCard();
  }

  render() {

    return (
      <div className="rouletteBox" onClick={this.selectCard}>
        <p>This is a {this.props.name} roulette box</p>
        <Card key={this.state.selectedCard.id}card={this.state.selectedCard} />
      </div>
    );
  }
}

export default RouletteBox;
