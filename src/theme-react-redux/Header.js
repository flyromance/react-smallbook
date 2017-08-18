import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

class Header extends Component {
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
				<h1 style={{color: this.props.themeColor}}>this is header</h1>
			</div>
		)
	}
}


function mapStateToProps(state) {
    return {
        themeColor: state.themeColor
    }
}

export default connect(mapStateToProps)(Header)