import React, { Component } from 'react';


class Message extends Component {
    render() {
        return (
            <div>
                <b>{this.props.message}</b>
            </div>
        )
    }
}

export default Message;
