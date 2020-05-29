import React, { Component } from 'react';
import Button from 'react-bootstrap/Button';

class EvenClicks extends Component {

    constructor(props) {
        super(props);

        this.state = {
            timesClicked: 0,
        };

        this.handleClick = this.handleClick.bind(this);
    }

    handleClick() {
        this.setState({ timesClicked: this.state.timesClicked + 1 });
    }

    render() {
        return (
            <Button
                variant="primary"
                style={
                    {
                        marginLeft: 50,
                        marginTop: 20,
                        paddingLeft: 50,
                        paddingRight: 50,
                    }
                }
                onClick={this.handleClick} >
                {this.state.timesClicked % 2 === 0 ? "Even Number" : "Odd Number"}
            </Button>
        )
    }

}

export default EvenClicks;