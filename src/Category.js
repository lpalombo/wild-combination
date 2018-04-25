import React, { Component } from 'react';
import Card from './Card';

class Category extends Component {

  render() {

    return (
      <div className="category">
        <h1>{this.props.name}</h1>
        {this.props.category.map((card) => {
          return <Card key={card.id}card={card} />
        })}
      </div>
    );
  }
}

export default Category;
