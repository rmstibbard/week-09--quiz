import React, { Component } from 'react';

class Fragment extends Component {

    render() {
        let { children } = this.props;

        return (
            <main>{children}</main>
        );
    }

}

export default Fragment;