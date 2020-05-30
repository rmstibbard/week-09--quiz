import React from "react";
import DatePicker from "react-datepicker";

import Alert from 'react-bootstrap/Alert';

import "react-datepicker/dist/react-datepicker.css";

class ExampleDatePicker extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            arrivalDate: new Date(),
            departureDate: new Date()
        };

        this.setArrivalDate = this.setArrivalDate.bind(this);
        this.setDepartureDate = this.setDepartureDate.bind(this);
    }


    setArrivalDate = date => {
        this.setState({
            arrivalDate: date
        });
        console.log(this.state.arrivalDate);
    };

    setDepartureDate = date => {
        this.setState({
            departureDate: date
        });
    };

    render() {

        let { arrivalDate, departureDate } = this.state;
        let stayLength = Math.round((departureDate - arrivalDate) / (1000 * 60 * 60 * 24));
        if (stayLength <= 0) {
            stayLength = " an invalid number of ";
            this.state.style = { backgroundColor: 'red' };
        } else {
            this.state.style = null;
        }
        console.log(stayLength);

        return (
            <>
                <h1>DatePicker - Select your Dates</h1>
                <div className="dates">
                    <div className="date-picker">
                        <h2>Arrival</h2>
                        <DatePicker
                            selected={this.state.arrivalDate}
                            onChange={this.setArrivalDate}
                        />
                    </div>
                    <div className="date-picker">
                        <h2>Departure</h2>
                        <DatePicker
                            selected={this.state.departureDate}
                            onChange={this.setDepartureDate}
                        />
                    </div>
                </div>
                <Alert
                    variant="primary"
                    className="length-of-stay"
                    style={this.state.style}>
                    You are staying {stayLength} nights
                </Alert>
            </>
        );
    }
}

export default ExampleDatePicker;