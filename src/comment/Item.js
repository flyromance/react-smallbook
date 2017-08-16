import React, { Component } from 'react'

class Item extends Component {
    constructor() {
    	super();
    }

    render() {
        return (
            <div className="item">
                <div className="item-user">{this.props.data.name}</div>
                <div className="item-content">{this.props.data.content}</div>
            </div>
        )
    }  
}

export default Item