import React, { Component } from 'react';
import './Post.css';

class Post extends Component {

  render() {
    return (
      <div className="post">
        <div className="selected-cards">
          {this.props.submission.selectedCards.map((card) => {
            return <div className="postCard">{card.name}</div>
          })}
        </div>
        <div className="inputted">
          <div className="postCard input">{this.props.submission.value}</div>
        </div>
      </div>
    );
  }
}

export default Post;
