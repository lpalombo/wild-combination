import React, { Component } from 'react';


class Post extends Component {
  constructor(props){
    super(props);
    this.state = {
      positions: ["10%","10%","10%"],
      rotations: ["5deg","-5deg","5deg"]
    }
  }

  formatTitle = (str) => {
    if(str){
      return str.split("-")[1].replace(/\w\S*/g, function(txt){return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();});
    }
  }

  randRange = (min,max) => {
    return (Math.floor((Math.random() * (max-min)) + min));
  }

  componentDidMount(){
    let newPositions = [];
    let newRotations = [];
    for(let i=0;i<this.state.positions.length;i++){
      let multiplier = (i % 2 + 1);
      newPositions.push((this.randRange(1,30*multiplier)+"%"));
      let rotateAmt = ((multiplier === 1) ? this.randRange(0,15) : this.randRange(-15,0));
      newRotations.push((rotateAmt+"deg"));
    }
    newRotations.push(this.randRange(-5,5)+"deg"); //for input card
    console.log(newRotations);
    this.setState({
      positions: newPositions,
      rotations: newRotations
    });
  }

  render() {
    return (
      <div className="postContainer">
        <div className="post">
          <div className="inputted">
            <div className="input" style={{
                transform: 'rotate('+this.state.rotations[this.state.rotations.length - 1]+')'
              }}>
              <p>Response</p>
              {this.props.submission.value}
            </div>
          </div>
          <div className="selected-cards">
            {this.props.submission.selectedCards.map((card, index) => {
              return (
                <div key={card.id} className={"postCard a"+card.category}
                  style={{
                    top:this.state.positions[index],
                    transform: 'rotate('+this.state.rotations[index]+')'
                  }}>
                  <div className="postCardInner">
                    <span className="postSpan" >{this.formatTitle(card.category)}</span>
                    {card.name}
                  </div>
                </div>
              )
            })}
          </div>
        </div>
        <div className="info">
          <div className="textContainer">
            <p>Submitted by NAME, LOCATION</p>
          </div>
          <div className="interfaceContainer noMargin">
            <button className="interfaceButton">Upvote (543)</button>
            <button className="interfaceButton">Comment</button>
            <button className="interfaceButton">Share on Twitter</button>
            <button className="interfaceButton">Report</button>
          </div>
        </div>
      </div>
    );
  }
}

export default Post;
