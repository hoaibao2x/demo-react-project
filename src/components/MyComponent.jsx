// class component
// function component

import React from 'react';

class MyComponent extends React.Component {

    state = {
        name: 'Nam',
        address: 'Viet Nam',
        age: 26
    };

    handeClick(event) {
        // console.log('Click me ^^');
        // console.log(event.target); // <button>Click Me !</button>
        // console.log(event);
        console.log('My name is ', this.state.name)
    }

    handleOnMouseOver(event) {
        // console.log(event);
        console.log(event.pageX);
    }

    // JSX
    render() {
        return (
            <div>
                My name is {this.state.name} and I'm from {this.state.address}
                <button onClick={this.handeClick}>Click Me!</button>
                <button onMouseOver={this.handleOnMouseOver}>Hover Me!</button>
            </div>
        );
    }
}

export default MyComponent;