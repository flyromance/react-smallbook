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
    super(props);
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
  constructor() {
    super();
    console.log('constructor');
  }

  componentWillMount() {
    console.log('component will mount');
  }

  componentWillReceiveProps(nextProps) {
    console.log('component will receive props');
  }

  shouldComponentUpdate(nextProps, nextState) {
    console.log('should component update');
    return true;
  }

  componentWillUpdate() {
    console.log('component will update');
  }

  render() {
    console.log('render');
    return (
      <ul>
        {this.props.list.map((item, index) => <li key={index}>{item}</li>)}
      </ul>
    )
  }

  componentDidUpdate() {
    console.log('componet did update');
  }

  componentDidMount() {
    console.log('component did mount');
  }

  componentWillUnmount() {
    console.log('component will unmount');
  }
}

class Clock extends Component {
  constructor() {
    super();
    this.state = {
      date: new Date()
    }
  }

  componentWillMount() {
    this.timer = setInterval(function () {
      this.setState({
        date: new Date()
      })
    }.bind(this), 1000);
  }

  render() {
    return (
      <div>time is : {this.state.date.toLocaleTimeString()}</div>
    )
  }

  componentWillUnmount() {
    clearInterval(this.timer);
    this.timer = null;
  }
}

class App extends Component {
  constructor() {
    super();
    this.state = {
      isShow: false,
      isShowClock: true,
      list: ['fanlong', 'flyromance', 'fandisaier']
    }
  }

  handleShowOrHide() {
    this.setState({
      isShow: !this.state.isShow
    });
  }

  handleAddItem() {
    this.setState({
      list: this.state.list.concat('ffff')
    });
  }

  toggleClock() {
    this.setState({
      isShowClock: !this.state.isShowClock
    });
  }

  render() {
    const commentList = [{name: '1231', content: 'lasdflsd;'}];
    const title = '<h1>this is title</h1>';
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>hello react!</h2>
        </div>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <div>{title}</div>
        <div dangerouslySetInnerHTML={{__html: title}}></div>
        <div><button onClick={this.toggleClock.bind(this)}>{this.state.isShowClock ? 'hide clock' : 'show clock'}</button></div>
        {this.state.isShowClock ? <Clock /> : null }
        <LikeButton likeText='已赞' unLikeText='赞' />
        <div>
          <button onClick={this.handleShowOrHide.bind(this)}>{this.state.isShow ? 'hide' : 'show'}</button>
          <button onClick={this.handleAddItem.bind(this)}>add item</button>
        </div>
        { this.state.isShow ? <List list={this.state.list} /> : null }
        <div className="comment-container">
          <Comment data={commentList}/>
        </div>
      </div>
    );
  }
}

export default App;
