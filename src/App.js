import React, { Component } from 'react';

import './App.css';
import Category from './Category';
import RouletteBox from './RouletteBox';
//import GetSheetDone from 'get-sheet-done';
import firebase from './firebase.js';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {

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

      //this.setState(snapshot.val());
    });
  }

  render() {
    let tempCategories  = this.state.categories;
    let categoryRender = null;

    if(tempCategories !== undefined){
      let temp = this.state.categories;
      categoryRender=[];
      Object.keys(temp).forEach((key) => {
        console.log(key, temp[key]);
        categoryRender.push(<Category key={key} name={key} category={temp[key]} />);
      });
      categoryRender.push(<RouletteBox name="technology" category={this.state.categories.technology} />);
    }

    return (
      <div className="app">
        {categoryRender}
      </div>
    );
  }
}

export default App;
