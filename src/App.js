import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'

import './App.css';
import Roulette from './Roulette';
import SubmissionField from './SubmissionField';
//import GetSheetDone from 'get-sheet-done';
import firebase from './firebase.js';

const Test1 = () => (
  <div>
    <h2>Test1</h2>
  </div>
)

const Test2 = () => (
  <div>
    <h2>Test2</h2>
  </div>
)

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      categories: {},
      selectedCards:[],
      clickedCard:{},
      submissions: []
    };

    this.handleClick = this.handleClick.bind(this);
    this.cardClick = this.cardClick.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount(){
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

    deckRef = firebase.database().ref('submissions');
    deckRef.on('value', (snapshot) => {
      let data = Object.values(snapshot.val());

      this.setState({
        submissions: data
      });
    });
  }

  randomCard(category){
    let catLength = category.length;
    let selectedIndex = Math.floor(Math.random() * catLength);
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
    this.selectCards();
  }

  cardClick(e){
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

  handleSubmit(value){
    console.log(value);
    let d = new Date();
    firebase.database().ref('submissions/'+ d.getTime()).set({
      value: value,
      selectedCards: this.state.selectedCards
    });

  }

  render() {
    return (
      <Router>
        <div className="app">
          <div className="nav">
            <ul>
              <li><Link to="/test1">Test 1</Link></li>
              <li><Link to="/test2">Test 2</Link></li>
            </ul>
          </div>
          <div className="routes">
            <Route path="/test1" component={Test1}/>
            <Route path="/test2" render={(props) => <Roulette clickHandler={this.cardClick} selectedCards={this.state.selectedCards} />}/>
          </div>

          <button className="roulette-button" onClick={this.handleClick}>Randomise Cards</button>
          <SubmissionField submitHandler={this.handleSubmit}/>
          <div className="submissions">
            {this.state.submissions.slice(0).reverse().map((submission) => {
              return ([
                <div className="submission">
                  <div className="selected-cards">
                    {submission.selectedCards.map((card) => {
                      return <span>{card.name}</span>
                    })}
                  </div>
                  <p>{submission.value}</p>
                </div>
              ])
            })}
          </div>
        </div>
      </Router>
    );
  }
}

export default App;
