import React, { Component } from 'react';

class Multiplier extends Component {

    render() {
        let result = this.props.x * this.props.y;
        return (
            <p>{result}</p>
        )
    }

}

export default Multiplier;