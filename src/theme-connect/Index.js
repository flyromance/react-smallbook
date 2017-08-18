import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Provider } from '../react-redux/index'

import Header from './Header'
import Content from './Content'

function createStore(reducer) {
	let state = null;
	const listeners = [];
	const dispatch = action => {
		state = reducer(state, action);
		listeners.forEach((listener, i) => listener());
	}
	const getState = () => state;
	const subscribe = (listener) => listeners.push(listener)

	dispatch({});

	return { dispatch, getState, subscribe }
}

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

export default Theme