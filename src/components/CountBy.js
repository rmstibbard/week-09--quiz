import React, { Component } from "react";
import Button from 'react-bootstrap/Button';

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
                <Button
                    variant="primary"
                    onClick={this.handleClick}>
                    Click to Count Up
                </Button>
                <h2>... and the answer is {this.state.result}</h2>
            </>
        )
    }

}

export default CountBy;