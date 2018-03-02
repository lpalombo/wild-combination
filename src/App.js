import React, { Component } from 'react';

import './App.css';
import Category from './Category';
//import GetSheetDone from 'get-sheet-done';
import firebase from './firebase.js';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {

    };
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

      //this.setState(snapshot.val());
    });
  }

  render() {
    console.log(this.state);

    let tempCategories  = this.state.categories;
    let categoryRender = null;

    if(tempCategories !== undefined){
      tempCategories  = Object.values(this.state.categories); //This converts the object of objects into and array
      //but probably don't do that, do this instead? https://teamtreehouse.com/community/looping-through-objects-in-javascript
      console.log("firing!!!"+tempCategories);

      categoryRender =
        tempCategories.map((category) => {
          return <Category key={category.name} category={category} />
        });
    }

    return (
      <div className="app">
        <div className="category">
          {categoryRender}
        </div>
      </div>
    );
  }
}

export default App;
