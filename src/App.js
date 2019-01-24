import React, { Component } from 'react';
import Message from './Component/Message.js';
import {connect } from 'react-redux';

const action = {
    type: 'UPDATE_CHOICE_WITH_MY_INDEX',
    indexSelected: Math.floor(Math.random() * 4)
}

class App extends Component {
    constructor(props) {
        super(props)
        setInterval(() => this.props.dispatch(action), 1000);
    }

    render() {
        console.log(this.props)
        return (
            <div>
                <ul>
                    {this.props.houses.map(house => (<li key={house}>{house}</li>))}
                </ul>
                <Message message={this.props.selectedHouses} />
            </div>
        );
    }
}

export default connect(store => store)(App);