import React, { Component } from 'react';

class Counter extends React.Component {
    //we made it a controlled component by removing its local state. now it needs to request for data 
    //from the parent component and raise events to update data.
    //just to bind the event handler
    // constructor() {
    //     super();
    //     this.handleIncrement = this.handleIncrement.bind(this);
    // }
    styles = {
        fontWeight: "Bold",
        fontSize: 20
    }
    render() { 
        return ( 
        <React.Fragment>
            <h4>Module: {this.props.counter.id}</h4>
            <span style = {this.styles} className= {this.getBadgeClasses()}>{this.formatCount()}</span>
            <button 
                style = {this.styles}
                onClick = {() => this.props.onIncrement(this.props.counter)}
                className='btn btn-secondary btn-sm m-2'
            >
            Increment
            </button> 
            <button 
                style = {this.styles}
                onClick = {() => this.props.onDecrement(this.props.counter)}
                className='btn btn-success btn-sm m-2'
            >
            Decrement
            </button> 
            <button 
                onClick = {() => this.props.onDelete(this.props.id)} 
                className="btn btn-danger btn-sm m-2"
            >
            Delete
            </button>
            <br />
        </React.Fragment>
        );
    }
    //if you don't use a lambda expression, the event handler does not bind to "this". Then you need to use constructor
    getBadgeClasses() {
        let classes = "badge m-2 badge-";
        classes += (this.props.counter.value === 0) 
            ? "warning" 
            : (this.props.counter.value < 0)
            ? "danger"
            : "primary";
        return classes;
    }
    formatCount() {
        return this.props.counter.value === 0 ? 'Zero': this.props.counter.value;
        //alternatively, you can set const {value} = this.state; and use value directly.
        //This is called object destructuring.
    }
}

 
export default Counter;