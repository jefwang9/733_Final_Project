import React, { Component }  from "react";
import logo from '../logo.svg';

class Counter extends Component {
    constructor(props) {
        super(props);

        this.state = {
            count: props.initialCount
        };
    }

    increment = () => {
        this.setState({
            count: this.state.count + 1
        })
    }


    decrement = () => {
        this.setState({
            count: this.state.count - 1
        })
    }

    render() {
        return (
            <div>
                <div>count: {this.state.count} </div>
                <button onClick={this.increment} >increment</button>
                <button onClick={this.decrement} >decrese</button>
            </div>
        );
    }
}

export default Counter
