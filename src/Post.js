import React, { Component } from 'react';


class Post extends Component {

  render() {
    return (
      <div className="postContainer">
        <div className="post">
          <div className="selected-cards">
            {this.props.submission.selectedCards.map((card) => {
              return (
                <div key={card.id} className={"postCard a"+card.category}>
                  <span className="postSpan" >{card.category}</span>
                  {card.name}
                </div>
              )
            })}
          </div>
          <div className="inputted">
            <div className="postCard input">{this.props.submission.value}</div>
          </div>
        </div>
        <div className="info">
          <div className="textContainer">
            <p>Submitted by NAME, LOCATION</p>
          </div>
          <div className="interfaceContainer noMargin">
            <button className="interfaceButton" onClick={console.log("hey")}>Upvote (543)</button>
            <button className="interfaceButton" onClick={console.log("hey")}>Comment</button>
            <button className="interfaceButton" onClick={console.log("hey")}>Share on Twitter</button>
            <button className="interfaceButton" onClick={console.log("hey")}>Report</button>
          </div>
        </div>
      </div>
    );
  }
}

export default Post;
