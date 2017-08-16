import React, { Component } from 'react';

class Input extends Component {
    constructor() {
        super()
    }

    render() {
        return (
            <div className="comment-input">
                <div>
                    <label htmlFor="username">用户名</label>
                    <input type='text' id='username' name='username'/>
                </div>
                <div>
                    <label htmlFor="commentContent">评论内容</label>
                    <textarea id="commentContent"></textarea>
                </div>
                <div>
                    <button onClick={this.handleClick} type="button">发布</button>
                </div>
            </div>
        )
    }  
}

export default Input