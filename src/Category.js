import React, { Component } from 'react';
import './Category.css';
import Card from './Card';

class Category extends Component {



  render() {

    return (
      <div className="category">
        <div>{this.props.name}</div>
        {this.props.category.map((card) => {
          return <Card key={card.id}card={card} />
        })}
      </div>
    );
  }
}

export default Category;
