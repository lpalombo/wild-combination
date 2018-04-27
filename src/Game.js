import React, { Component } from 'react';
import Roulette from './Roulette';
import SubmissionField from './SubmissionField';
import { Redirect } from 'react-router-dom'

class Game extends Component {
  constructor(props){
    super(props);
    this.state = {
      step: 1
    }
    this.handleClick = this.handleClick.bind(this);
    this.setStep = this.setStep.bind(this);
    this.cardClick = this.cardClick.bind(this);
    this.nextStep = this.nextStep.bind(this);
    this.getDisabledClass = this.getDisabledClass.bind(this);
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

  nextStep() {
    let val;
    if(this.state.step !== 4){
      val = 1 + this.state.step;
    } else {

    }
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

  getDisabledClass(num){
    return ((num === this.state.step) ? "active" : "");
  }

  render() {
    return (
      <div className="game">
        <div className="flow">
          <ul>
            <li><span className={this.getDisabledClass(1)}>1</span>Choose a Deck</li>
            <li><span className={this.getDisabledClass(2)}>2</span>Create a Combo</li>
            <li><span className={this.getDisabledClass(3)}>3</span>Write a Response</li>
            <li><span className={this.getDisabledClass(4)}>4</span>Review and Submit</li>
          </ul>
        </div>

        {this.state.step === 1 &&
          <div>
            <h1>Category placeholder</h1>
            <div className="interfaceContainer right">
              <button className="ctaButton" onClick={this.nextStep}>Continue to next step →</button>
            </div>
          </div>
        }
        {this.state.step === 2 &&
          <div>
            <Roulette clickHandler={this.cardClick} selectedCards={this.props.selectedCards} />
            <div className="interfaceContainer">
              <button className="interfaceButton" onClick={this.handleClick}>Randomise Cards</button>
            </div>
            <div className="interfaceContainer right">
              <button className="ctaButton" onClick={this.nextStep}>Continue to next step →</button>
            </div>
          </div>
        }
        {this.state.step === 3 &&
          <div>
            <SubmissionField submitHandler={this.props.submitHandler}/>
            <div className="interfaceContainer right">
              <button className="ctaButton" onClick={this.nextStep}>Continue to next step →</button>
            </div>
          </div>
        }
        {this.state.step === 4 &&
          <div>
            <h1>Review placeholder</h1>
            <div className="interfaceContainer right">
              <button className="ctaButton" onClick={this.nextStep}>Continue to next step →</button>
            </div>
          </div>
        }
      </div>
    );
  }
}

export default Game;
