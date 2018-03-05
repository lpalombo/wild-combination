import React, { Component } from 'react';

import './App.css';
import Category from './Category';
import Roulette from './Roulette';
//import GetSheetDone from 'get-sheet-done';
import firebase from './firebase.js';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      categories: {},
      selectedCards:[],
      clickedCard:{}
    };

    this.handleClick = this.handleClick.bind(this);
    this.cardClick = this.cardClick.bind(this);
  }

  componentWillMount(){
    /* Create reference to messages in Firebase Database */
    let deckRef = firebase.database().ref('masterSheet');
    deckRef.on('value', (snapshot) => {

      let decks = snapshot.val();
      for(let deck in decks){
        this.setState({
          categories: decks[deck].data
        });
      }
    });
  }

  randomCard(category){
    let catLength = category.length;
    let selectedIndex = Math.floor(Math.random() * catLength);
    let selectedObject = category[selectedIndex];
    return category[selectedIndex];
  }

  selectCards(){
    let temp = this.state.categories;
    let tempCards=[];
    Object.keys(temp).forEach((key) => {
      //categoryRender.push(<Category key={key} name={key} category={temp[key]} />);
      let selectedCard = this.randomCard(temp[key]);
      tempCards.push(selectedCard);
    });
    this.setState({
      selectedCards:tempCards
    });
  }

  handleClick(e){
    console.log("sup");
    this.selectCards();
  }

  cardClick(e){
    let temp = this.state.categories;
    let tempCards = this.state.selectedCards.map((card, index) => {
      if(card === e){
        return this.randomCard(Object.values(this.state.categories)[index]);
      } else {
        return this.state.selectedCards[index];
      }
    });

    console.log(tempCards);

    this.setState({
      clickedCard:e,
      selectedCards: tempCards
    });
  }


  render() {

    return (
      <div className="app">
        <Roulette clickHandler={this.cardClick} selectedCards={this.state.selectedCards} />
        <button onClick={this.handleClick}>Test</button>
        <button onClick={this.cardClick}>Sup</button>
      </div>
    );
  }
}

export default App;
