import React, { Component } from 'react'
import Input from './Input'
import List from './List'
import PropTypes from 'prop-types'

import './index.css';

class Comment extends Component {
	static childContextTypes = {
		themeColor: PropTypes.string
	}

	constructor(props) {
		super(props);
		this.state = {
			comments: [],
		}
	}

	getClildContext() {
		return {
			themeColor: 'green'
		}
	}

	componentWillMount() {
		this._loadComments();
	}

	_loadComments() {
		var comments = localStorage.getItem('comments');
		comments = comments ? JSON.parse(comments) : [];
		this.setState({comments});
	}

	_saveComments(comments) {
		localStorage.setItem('comments', JSON.stringify(comments));
	}

	handleSubmitComment(item) {
		var comments = this.state.comments;
		comments.push(item);
		this._saveComments(comments);
		this.setState({comments});
	}

	handleDeleteComment(index) {
		var comments = this.state.comments;
		comments.splice(index, 1);
		this._saveComments(comments);
		this.setState({comments});
	}

	render() {
		return (
			<div className="comment-box">
				<Input onSubmit={this.handleSubmitComment.bind(this)}  />
				<List comments={this.state.comments} onDelete={this.handleDeleteComment.bind(this)} />
			</div>
		)
	}
}

export default Comment