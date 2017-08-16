import React, { Component } from 'react'
import Item from './Item'

class List extends Component {
    constructor() {
        super();
    }

    render() {
        return (
            <div className="comment-list">
                {this.props.data.map((item, index) => {
                    return <Item data={item} key={index} />
                })}
            </div>
        )
    }  
}

export default List