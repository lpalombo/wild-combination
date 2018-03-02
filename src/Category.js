import React, { Component } from 'react';
import './Category.css';
import Card from './Card';

class Category extends Component {

  // constructor(props) {
  //   super(props);
  //   this.state = {
  //     category: []
  //   };
  // }
  // {this.state.cards.map((card) => {
  //   return <Card key={card.id}card={card} />
  // })} props block

  render() {
    console.log(this.props.category);

    return (
      <div className="category">
        {this.props.category.map((card) => {
          return <Card key={card.id}card={card} />
        })}
      </div>
    );
  }
}

export default Category;
