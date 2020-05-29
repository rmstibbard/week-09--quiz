import React, { Component } from "react";

class HideMe extends Component {

    constructor(props) {
        super(props);
        console.log(props);
        this.state = {
            clicked: false,
        };

        this.handleClick = this.handleClick.bind(this);
    }

    handleClick() {
        this.setState({ clicked: true });
    }

    render() {
        let { children } = this.props;
        return (
            <p onClick={this.handleClick}>
                {!this.state.clicked ? children : ''}
            </p>
        )
    }

}

export default HideMe;