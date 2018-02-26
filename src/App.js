import React, { Component } from 'react';
import Card from './Card';
import './App.css';
import GetSheetDone from 'get-sheet-done';


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cards: []
    };
  }

  render() {
    GetSheetDone.labeledCols("1StGNuF34ItuFWt0_PpN0lU7YTbCy8yiyild78MrqVIw",2).then(sheet => {
      //console.log(sheet);
      this.setState({
        cards: sheet.data
      })
    });

    return (
      <div className="App">
        <div className="cards">
          {this.state.cards.map((card) => {
            return <Card key={card.id}card={card} />
          })}
        </div>
      </div>
    );
  }
}

export default App;
