import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'

import './App.css';
//import GetSheetDone from 'get-sheet-done';
import firebase from './firebase.js';
import Home from './Home';
import Game from './Game';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      categories: {},
      selectedCards:[],
      clickedCard:{},
      submissions: []
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleSelectedCards = this.handleSelectedCards.bind(this);
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

  handleSelectedCards(value){
    console.log(value);
    this.setState(value);
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
              <li><Link to="/">Home</Link></li>
              <li><Link to="/play">Play the game</Link></li>
              <li><Link to="/about">About</Link></li>
            </ul>
          </div>
          <div className="routes">
            <Route exact path="/" render={(props) => <Home submissions={this.state.submissions}/>}/>
            <Route path="/play" render={(props) => <Game {...this.state} selectedHandler={this.handleSelectedCards} submitHandler={this.handleSubmit}/>}/>
          </div>

        </div>
      </Router>
    );
  }
}

export default App;
