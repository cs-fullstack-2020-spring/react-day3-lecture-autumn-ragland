import React, { Component } from 'react';
import Dogs from './Dogs';

class Pets extends Component {
    constructor(props) {
        super(props);
        this.state = {
            favDog: "my dog",
        }
    }
    componentDidMount(){
        console.log("The component Pet did mount");
        this.setState({favDog : "your dog"});
    }
    render() {
        return (
            <div>
                <h2>List of Pets</h2>
                <h3>My dog is the color {this.props.color}</h3>
                <Dogs />
                <h3>My favorite dog is {this.state.favDog}</h3>
            </div>
        )
    }

}

export default Pets;