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
      categories: {}
    };
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

  render() {


    return (
      <div className="app">
        <Roulette categories={this.state.categories} />
      </div>
    );
  }
}

export default App;
