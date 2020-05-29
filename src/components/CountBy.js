import React, { Component } from "react";

class CountBy extends Component {

    constructor(props) {
        super(props);
        this.state = { result: 0 };
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick() {
        this.setState({
            result: +this.state.result + +this.props.step,
        });
    }

    render() {
        return (
            <>
                <h1>Counting up by {this.props.step}</h1>
                <button onClick={this.handleClick}>Click to Count Up</button>
                <h2>{this.state.result}</h2>
            </>
        )
    }

}

export default CountBy;