import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Comment from './comment/Index';
window.React = React;

class LikeButton extends Component {
  static defaultProps = {
    likedText: '取消',
    unlikedText: '点赞'
  }

  constructor(props) {
    super();
    this.state = {
      isLiked : false
    }
  }

  handleClick(e) {
    this.setState({
      isLiked: !this.state.isLiked
    });
  }

  render() {
    const likeText = this.props.likeText ;
    const unLikeText = this.props.unLikeText;

    return (
      <button onClick={this.handleClick.bind(this)}>{this.state.isLiked ? unLikeText : likeText}</button>
    )
  }
}

class List extends Component {
  render() {
    return (
      <ul>
        <li>fanlong</li>
        <li>fandisaier</li>
        <li>flyromance</li>
      </ul>
    )
  }
}

class App extends Component {
  constructor() {
    super();
    this.state = {
      isLiked: false
    }
  }

  render() {
    const commentList = [{name: '1231', content: 'lasdflsd;'}];

    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>hello react!</h2>
        </div>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <LikeButton likeText='已赞' unlikeText='赞' />
        <List />

        <div className="comment-container">
          <Comment data={commentList}/>
        </div>
      </div>
    );
  }
}

export default App;
