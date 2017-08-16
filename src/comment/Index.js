import React, { Component } from 'react'
import Input from './Input'
import List from './List'

class Comment extends Component {
	constructor() {
		super();
	}

	render() {
		return (
			<div className="comment-box">
				<Input />
				<List data={this.props.data}/>
			</div>
		)
	}
}

export default Comment