import React, { Component } from 'react'
import PropTypes from 'prop-types'

class Item extends Component {
	static propTypes = {
		onDelete: PropTypes.func,
		index: PropTypes.number,
		comment: PropTypes.object
	} 

	static contextTypes = {
    	themeColor: PropTypes.string
    }

    constructor() {
    	super();
    	this.state = {
    		timeStr: ''
    	}
    }

    componentWillMount() {
    	this._updateTimeStr();
    	this.timer = setInterval(() => {
    		this._updateTimeStr();
    	}, 5000);
    }

    componentWillUnmount() {
    	clearInterval(this.timer);
    	this.timer = null;
    }

    _updateTimeStr() {
    	const date = this.props.comment.date;
    	const interval = (new Date() - date) / 1000;
    	const timeStr = interval > 60 ? interval / 60 > 60 ? `${Math.ceil(interval / 3600)}小时前` : `${Math.ceil(interval / 60)}分钟前` : `${Math.ceil(interval)}秒前`;

    	this.setState({timeStr});
    }

    _getProcessedContent(content) {
    	return content
    		.replace(/</g, () => '&lt;')
    		.replace(/>/g, () => '&gt;')
    		// .replace(/"/g, () => '&quot;')
    		// .replace(/'/g, () => '&#039;')
    		// .replace(/&/g, () => '&amp;')
    		.replace(/`(.+?)`/g, ($0, $1) => `<code>${$1}</code>`);
    }

    handleDelete(e) {
    	this.props.onDelete && this.props.onDelete(this.props.index);
    }

    render() {
    	const comment = this.props.comment;
        // console.log(this.context.themeColor);
        return (
            <div className="item">
                <div className="item-user">{comment.name}</div>
                <div className="item-content">
                	<p dangerouslySetInnerHTML={{__html: this._getProcessedContent(comment.content)}} />
                	<div className="item-date">{this.state.timeStr}</div>
                </div>
                <div className="item-close" onClick={this.handleDelete.bind(this)}>X</div>
            </div>
        )
    }  
}

export default Item