import React, { Component } from 'react';


class Card extends Component {
  constructor(props) {
    super(props);
    this.handleMouseHover = this.handleMouseHover.bind(this);
    this.state = {
      isHovering: false,
    };
  }

  formatCat(str){
    if(str){
      return str.split("-")[1];
    }
  }
  formatTitle(str){
    if(str){
      return str.split("-")[1].replace(/\w\S*/g, function(txt){return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();});
    }
  }

  handleClick = () => { this.props.clickHandler(this.props.card)};

  handleMouseHover() {
    this.setState(this.toggleHoverState);
  }

  toggleHoverState(state) {
    console.log(!state.isHovering);
    return {
      isHovering: !state.isHovering,
    };
  }

  render() {

    let catClass = "card "+this.formatCat(this.props.card.category);
    let catTitle = this.formatTitle(this.props.card.category);

    return (
      <button
        onClick={this.handleClick}
        className={catClass}
        onMouseEnter={this.handleMouseHover}
        onMouseLeave={this.handleMouseHover}
      >
        <div class="cardInner">
          <div className="cat"><span>{catTitle}</span></div>
          <div className="cardText">
            <p className="name">{this.props.card.name}</p>
            {
              this.state.isHovering &&
              <div>
                {this.props.card.description &&
                  <p className="description">{this.props.card.description}</p>
                }
                {this.props.card.examples &&
                  <p className="examples">{this.props.card.examples}</p>
                }
                {this.props.card.source &&
                  <p className="source">Source: {this.props.card.source}</p>
                }
              </div>
            }
          </div>
        </div>
      </button>
    );
  }
}

export default Card;
