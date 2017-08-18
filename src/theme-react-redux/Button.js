import React, { Component } from 'react'
import PropTypes from 'prop-types'

import { connect } from 'react-redux'

class Button extends Component {
	static propTypes = {
		themeColor: PropTypes.string,
		switchColor: PropTypes.func
	}

	constructor() {
		super();
		this.state = {
			themeColor: ''
		}
	}

	handleSwitchColor(color) {
		this.props.switchColor && this.props.switchColor(color);
	}

	render() {
		return (
			<div>
				<button style={{color: this.props.themeColor }} onClick={this.handleSwitchColor.bind(this, 'red')}>red</button>
				<button style={{color: this.props.themeColor }} onClick={this.handleSwitchColor.bind(this, 'blue')}>blue</button>
			</div>
		)
	}
}

function mapStateToProps(state) {
	return {
		themeColor: state.themeColor
	}
}

function mapDispatchToProps(dispatch) {
	return {
		switchColor: function (color) {
			dispatch({
				type: 'change_color',
				themeColor: color
			})
		}
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(Button)