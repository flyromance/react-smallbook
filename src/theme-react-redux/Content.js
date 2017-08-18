import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import Button from './Button'

class Content extends Component {
    static propTypes = {
        themeColor: PropTypes.string
    }

	constructor() {
		super();
		this.state = {
			themeColor: ''
		}
	}

	render() {
		return (
			<div>
				<div style={{color: this.props.themeColor}}>this is content</div>
				<Button />
			</div>
		)
	}
}

function mapStateToProps(state) {
	return {
		themeColor: state.themeColor
	}
}

export default connect(mapStateToProps)(Content)