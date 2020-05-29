import React, { Component } from 'react';

class MinimumLength extends Component {
    constructor(props) {
        super(props);
        this.state = { input: "" };
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(e) {
        this.setState({ input: e.currentTarget.value });

        let length = this.state.input.length;

        if (length < 30) {
            this.setState({ message: "Too short!" })
        }
        if (length >= 30) {
            this.setState({ message: "OK!" })
        }

    }

    render() {
        return (

            <div>
                <h2>Length Checker</h2>
                <label>Input: </label>
                <input
                    onChange={this.handleChange}
                    value={this.state.input}
                />
                <p>{this.state.message}</p>
            </div>

        );
    }
}

export default MinimumLength;
