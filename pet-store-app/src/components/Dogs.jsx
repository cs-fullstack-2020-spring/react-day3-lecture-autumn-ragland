import React, { Component } from 'react';

class Dogs extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        let dogBreeds = ["poodle", "yorkie", "beagle"];
        return (
            <div>
                <h3>Dogs</h3>
                <div>
                    {/* pass a variable to represent the current element and a variable to represent the current index position into map - set a `key` attribute in your returned element equal to the current index position and set the value to display (between the tags) equal to your current element */}
                    {
                        dogBreeds.map((dog, index) => {
                            return <p key = {index}>{dog}</p>
                        })
                    }
                </div>
            </div>
        )
    }
}

export default Dogs;