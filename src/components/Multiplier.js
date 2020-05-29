import React, { Component } from 'react';

class Multiplier extends Component {

    render() {
        let result = this.props.x * this.props.y;
        return (
            <h1>{this.props.x} times  {this.props.y} = {result}</h1>
        )
    }

}

export default Multiplier;