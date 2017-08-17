import React, { Component } from 'react'
import Input from './Input'
import List from './List'

import './index.css';

class Comment extends Component {
	constructor(props) {
		super(props);
		this.state = {
			comments: [],
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

	_saveComments(item, isAdd) {
		var comments = this.state.comments;

		if (isAdd === false) {
			// 删除
			comments.splice(item, 1);
		} else {
			comments.push(item);			
		}

		localStorage.setItem('comments', JSON.stringify(comments));
		
		this.setState({
			comments: comments
		});
	}

	handleSubmitComment(item) {
		this._saveComments(item);
	}

	handleDeleteComment(key) {
		var index;
		this.state.comments.forEach(function (item, i) {
			if (item._id === key) {
				index = i;
				return false;
			}
		});
		console.log(index);
		this._saveComments(index, false);
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