import React, { Component } from 'react';
import Roulette from './Roulette';
import SubmissionField from './SubmissionField';

class Game extends Component {
  constructor(props){
    super(props);
    this.state = {
      step: 1
    }
    this.handleClick = this.handleClick.bind(this);
    this.setStep = this.setStep.bind(this);
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

  setStep(val){
    console.log(val);
    this.setState({
      step: val
    });
  }


  cardClick(e){
    let tempCards = this.props.selectedCards.map((card, index) => {
      if(card === e){
        return this.randomCard(Object.values(this.props.categories)[index]);
      } else {
        return this.props.selectedCards[index];
      }
    });

    this.props.selectedHandler({
      clickedCard:e,
      selectedCards: tempCards
    });
  }

  render() {
    return (
      <div className="game">
        <div className="flow">
          <ul>
            <button onClick={() => {this.setStep(1)}} ><li><span>1</span>Choose a Deck</li></button>
            <button onClick={() => {this.setStep(2)}} ><li><span>2</span>Create a Combo</li></button>
            <button onClick={() => {this.setStep(3)}} ><li><span>3</span>Write a Response</li></button>
            <button onClick={() => {this.setStep(4)}} ><li><span>4</span>Review and Submit</li></button>
          </ul>
        </div>

        {this.state.step === 1 &&
          <div>
            <h1>Category placeholder</h1>
          </div>
        }
        {this.state.step === 2 &&
          <div>
            <Roulette clickHandler={this.cardClick} selectedCards={this.props.selectedCards} />
            <div className="interfaceContainer">
              <button className="interfaceButton" onClick={this.handleClick}>Randomise Cards</button>
            </div>
            <div className="interfaceContainer right">
              <button className="ctaButton" disabled={true}>Continue to next step →</button>
            </div>
          </div>
        }
        {this.state.step === 3 &&
          <div>
            <SubmissionField submitHandler={this.props.submitHandler}/>
          </div>
        }
        {this.state.step === 4 &&
          <div>
            <h1>Review placeholder</h1>
          </div>
        }
      </div>
    );
  }
}

export default Game;
