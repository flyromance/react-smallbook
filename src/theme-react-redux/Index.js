import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Provider } from 'react-redux'
import { createStore } from 'redux'

import Header from './Header'
import Content from './Content'

function themeReducer(state, action) {
	state = state || {
		themeColor: 'black'
	};

	switch (action.type) {
		case 'change_color':
			return { ...state, themeColor: action.themeColor };
		default:
			return state;
	}
}

const store = createStore(themeReducer);

class Theme extends Component {

	render() {
		return (
			<Provider store={store}>
				<div>
					<Header />
					<Content />
				</div>
			</Provider>
		)
	}
}


function mapStateToProps(state) {
	return {
		themeColor: state.themeColor
	}
}

export default Theme