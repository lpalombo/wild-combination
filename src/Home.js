import React, { Component } from 'react';
import Post from './Post';
import InfiniteScroll from 'react-infinite-scroll-component';
import firebase from './firebase.js';

class Home extends Component {
  constructor(props){
    super(props);
    this.state = {
      submissions: [],
      count: 5,
      increment: 5,
      hasMore: true
    }
    this.refresh = this.refresh.bind(this);
    this.incrementCount = this.incrementCount.bind(this);
  }

  componentDidMount(){
    this.refresh();
  }

  refresh(){
    let deckRef = firebase.database().ref('submissions').limitToLast(this.state.count);
    deckRef.on('value', (snapshot) => {
      let data = Object.values(snapshot.val());
      console.log(data,this.state.count);
      this.setState({
        submissions: data
      });
    });
  }

  incrementCount(){
    console.log("firing!");
    let newCount = this.state.count + this.state.increment;
    this.setState({
      count: newCount
    })
    this.refresh();
  }

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
          <InfiniteScroll
            dataLength={this.state.submissions.length}
            next={this.incrementCount}
            hasMore={(this.state.count <= this.state.submissions.length)}
            loader={<h4>Loading...</h4>}
            refreshFunction={this.refresh}
            endMessage={
              <p style={{textAlign: 'center'}}>
                <b>Yay! You have seen it all</b>
              </p>
            }>
              {this.state.submissions.slice(0).reverse().map((post) => {
                return (
                  <Post key={post.id} submission={post}/>
                )
              })}
          </InfiniteScroll>
        </div>
      </div>
    );
  }
}

export default Home;
