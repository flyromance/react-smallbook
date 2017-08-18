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

    handleDelete(i) {
        this.props.onDelete && this.props.onDelete(i);
    }

    render() {
        console.log(this.context.themeColor);
        return (
            <div className="comment-list">
                {this.props.comments.map((item, i) => {
                    return <Item comment={item} index={i} key={i} onDelete={this.handleDelete.bind(this)}/>
                })}
            </div>
        )
    }  
}

export default List