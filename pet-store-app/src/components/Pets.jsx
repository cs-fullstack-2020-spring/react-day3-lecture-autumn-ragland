import React, { Component } from 'react';
import Dogs from './Dogs';

class Pets extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <h1>List of Pets!</h1>
                <Dogs/>
            </div>
        );
    }
}

export default Pets;