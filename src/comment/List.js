import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Item from './Item'

class List extends Component {
    static defaultProps = {
        comments: []
    }

    static propTypes = {
        comments: PropTypes.array.isRequired
    }

    constructor(props) {
        super(props);
    }

    handleDelete(key) {
        this.props.onDelete(key);
    }

    render() {
        return (
            <div className="comment-list">
                {this.props.comments.map((item, index) => {
                    return <Item comment={item} key={index} onDelete={this.handleDelete.bind(this)}/>
                })}
            </div>
        )
    }  
}

export default List