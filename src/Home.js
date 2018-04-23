import React, { Component } from 'react';


class Home extends Component {


  render() {
    return (
      <div className="home">
        <div className="header">
          <h1>Create the spark for the idea that changes the world.</h1>
          <p>Wild Combination is a rapid ideation card game where participants apply technologies to real-life scenarios to create novel solutions for people.</p>
        </div>
        <div className="submissions">
          {this.props.submissions.slice(0).reverse().map((submission) => {
            return ([
              <div className="submission">
                <div className="selected-cards">
                  {submission.selectedCards.map((card) => {
                    return <span>{card.name}</span>
                  })}
                </div>
                <p>{submission.value}</p>
              </div>
            ])
          })}
        </div>
      </div>
    );
  }
}

export default Home;
