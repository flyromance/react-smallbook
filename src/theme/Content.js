import React, { Component } from 'react'
import PropTypes from 'prop-types'

import Button from './Button'

class Content extends Component {
	static contextTypes = {
		store: PropTypes.object
	}

	constructor() {
		super();
		this.state = {
			themeColor: ''
		}
	}

	componentWillMount() {
		const { store } = this.context;
		this._updateThemeColor();
		store.subscribe(() => {this._updateThemeColor})
	}

	_updateThemeColor() {
		const { store } = this.context;
		const state = store.getState();
		this.setState({
			themeColor: state.themeColor
		});
	}

	render() {
		return (
			<div>
				<div style={{color: this.state.themeColor}}>this is content</div>
				<Button />
			</div>
		)
	}
}

export default Content