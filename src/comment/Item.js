import React, { Component } from 'react'

class Item extends Component {
    constructor() {
    	super();
    }

    handleDelete(e) {
    	this.props.onDelete(this.props.comment._id);
    }

    render() {
        return (
            <div className="item">
                <div className="item-user">{this.props.comment.name}</div>
                <div className="item-content">
                	<p>{this.props.comment.content}</p>
                	<div className="item-date">{this.props.comment.date}</div>
                </div>
                <div className="item-close" onClick={this.handleDelete.bind(this)}>X</div>
            </div>
        )
    }  
}

export default Item