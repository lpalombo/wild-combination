import React, { Component } from 'react';
import Roulette from './Roulette';
import SubmissionField from './SubmissionField';

class Game extends Component {

  constructor(props){
    super(props);

    this.handleClick = this.handleClick.bind(this);
    this.cardClick = this.cardClick.bind(this);
  }

  randomCard(category){
    let catLength = category.length;
    let selectedIndex = Math.floor(Math.random() * catLength);
    return category[selectedIndex];
  }

  selectCards(){
    let temp = this.props.categories;
    let tempCards=[];
    Object.keys(temp).forEach((key) => {
      //categoryRender.push(<Category key={key} name={key} category={temp[key]} />);
      let selectedCard = this.randomCard(temp[key]);
      tempCards.push(selectedCard);
    });
    this.props.selectedHandler({
      selectedCards: tempCards
    });

  }

  handleClick(e){
    this.selectCards();
  }

  cardClick(e){
    let tempCards = this.props.selectedCards.map((card, index) => {
      if(card === e){
        return this.randomCard(Object.values(this.props.categories)[index]);
      } else {
        return this.props.selectedCards[index];
      }
    });

    console.log(tempCards);

    this.props.selectedHandler({
      clickedCard:e,
      selectedCards: tempCards
    });
  }

  render() {
    return (
      <div className="game">
        <Roulette clickHandler={this.cardClick} selectedCards={this.props.selectedCards} />
        <button className="roulette-button" onClick={this.handleClick}>Randomise Cards</button>
        <SubmissionField submitHandler={this.props.submitHandler}/>
      </div>
    );
  }
}

export default Game;
