import React, { Component } from "react";

class CountBy extends Component {

    constructor(props) {
        super(props);
        console.log(props);
        this.state = { result: 0 };
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick() {
        this.setState({
            result: this.state.result + this.props.step,
        });
    }

    render() {
        return (
            <p onClick={this.handleClick}>{this.state.result}</p>
        )
    }

}

export default CountBy;