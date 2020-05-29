import React, { Component } from 'react';

class MinimumLength extends Component {
    constructor(props) {
        super(props);
        this.state = { input: "" };
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(e) {
        this.setState({ input: e.currentTarget.value });
    }

    render() {
        let inputLength = this.state.input.length;
        let message = "OK";

        if (inputLength < this.props.minLength) {
            message = "Too short!"
        }

        return (
            <div>
                <h2>Length Checker - Minimum Length  {this.props.minLength}</h2>
                <label>Input: </label>
                <input
                    onChange={this.handleChange}
                    value={this.state.input}
                />
                <p>{message}</p>
            </div >
        );
    }
}

export default MinimumLength;
