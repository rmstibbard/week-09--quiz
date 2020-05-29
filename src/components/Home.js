import React, { Component } from 'react';
import { Link } from 'react-router-dom';

const style = {
    display: 'block',
    lineHeight: '2.5rem',
    fontSize: '1.5rem'
}

class Home extends Component {

    render() {

        return (
            <>
                <h1>Week 9 Quiz</h1>
                <Link style={style} to="/multiplier/3/6">Multiplier</Link>
                <Link style={style} to="/even-clicks">Even clicks</Link>
                <Link style={style} to="count-by/25">Count By</Link>
                <Link style={style} to="hide-me">Hide Me</Link>
                <Link style={style} to="minimum-length/5">Minimum Length</Link>
            </>
        )
    }

}

export default Home;