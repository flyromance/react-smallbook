import React, { Component } from 'react';
import PropTypes from 'prop-types'

class Input extends Component {
    static defaultProps = {
        name: '',
        content: ''
    }

    static propTypes = {
        name: PropTypes.string,
        content: PropTypes.string
    }

    static contextTypes = {
        themeColor: PropTypes.string
    }

    constructor(props) {
        super(props);
        this.state = {
            name: this.props.name,
            content: ''
        }
    }

    componentWillMount() {
        this.state.name = localStorage.getItem('name');
    }

    componentDidMount() {
        // this.refs.textarea.focus(); // 设置字符串方式
        this.textarea.focus(); // 设置回调函数方式
    }

    _saveName(name) {
        localStorage.setItem('name', name);
    }

    handleSubmit(e) {
        if (this.state.name && this.state.content) {

            // 调用父组件方法，改变父组件的state数据：评论数据
            this.props.onSubmit && this.props.onSubmit({
                name: this.state.name,
                content: this.state.content,
                date: +new Date()
            });

            // 改变本组件的状态：清空输入的评论内容
            this.setState({
                content: ''
            });
        }
    }

    handleNameChange(e) {
        this.setState({
            name: e.target.value
        });
    }

    handleContentChange(e) {
        this.setState({
            content: e.target.value
        });
    }

    handleBlur(e) {
        this._saveName(e.target.value);
    }

    render() {
        console.log(this.context.themeColor);
        return (
            <div className="comment-input">
                <div className="input-group">
                    <label htmlFor="username">用户名</label>
                    <div className="input">
                        <input type='text' id='username' name='name' value={this.state.name} 
                            onBlur={this.handleBlur.bind(this)}
                            onChange={this.handleNameChange.bind(this)} />
                    </div>
                </div>
                <div className="input-group">
                    <label htmlFor="commentContent">评论内容</label>
                    <div className="input">
                        <textarea id="commentContent" value={this.state.content} 
                            // ref='textarea' 
                            ref={(textarea) => {this.textarea = textarea}}
                            onChange={this.handleContentChange.bind(this)} />
                    </div>
                </div>
                <div className="btn-group">
                    <button onClick={this.handleSubmit.bind(this)} className="btn btn-success" type="button">发布</button>
                </div>
            </div>
        )
    }  
}

export default Input