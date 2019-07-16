import React, { Component } from 'react';

export class Success extends Component {
    continue = e => {
        e.preventDefault();
        // This is where API send code might go
        this.props.nextStep(); 
    }

    back = e => {
        e.preventDefault();
        this.props.nextStep();
    }

    render() {
        return (
            <>
              <h1>Rutgers Data Entry</h1>
              <p>Thank you for your submission. You will get an email confirmation.</p>
            </>
        )
    }
}

export default Success;
