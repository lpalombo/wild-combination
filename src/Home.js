import React, { Component } from 'react';
import Post from './Post';

class Home extends Component {


  render() {
    return (
      <div className="home">
        <header>
          <div>
            <h1>Create the spark for the idea that changes the world.</h1>
            <p>Wild Combination is a rapid ideation card game where participants apply technologies to real-life scenarios to create novel solutions for people.</p>
          </div>
        </header>
        <div className="submissions">
          {this.props.submissions.slice(0).reverse().map((submission) => {
            return ([
              <Post key={Object.keys(submission)} submission={submission}/>
            ])
          })}
        </div>
      </div>
    );
  }
}

export default Home;
