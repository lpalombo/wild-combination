import React, { Component } from 'react';
import './Category.css';
import Card from './Card';

class Roulette extends Component {

  constructor(){
    super();
    this.state = {
      render:[]
    };
    this.handleClick = this.handleClick.bind(this);
  }

  randomCard(category){
    let catLength = category.length;
    let selectedIndex = Math.floor(Math.random() * catLength);
    let selectedObject = category[selectedIndex];
    return category[selectedIndex];
  }

  rollBoxes(){
    let temp = this.props.categories;
    let tempRender=[];
    Object.keys(temp).forEach((key) => {
      //categoryRender.push(<Category key={key} name={key} category={temp[key]} />);
      let selectedCard = this.randomCard(temp[key]);
      tempRender.push(<Card key={selectedCard.id} card={selectedCard}/>);
    });
    this.setState({
      render:tempRender
    });
  }

  handleClick(e){
    this.rollBoxes();
  }

  render() {
    return (
      <div className="roulette">
        {this.state.render}
        <button onClick={this.handleClick}>Test</button>
      </div>
    );
  }
}

export default Roulette;
