import React, { Component } from 'react';
import Counter from './counter';

class Counters extends React.Component {

    render() { 
        //object destructuring for clean code (no need to write this.props everywhere)
        const {onDelete, onIncrement, onReset, counters, onDecrement} = this.props;
        return (
        <div>
            <button 
                onClick = {onReset} 
                className="btn btn-primary btn-sm m-2"
                >
                Reset
            </button>

            {counters.map(counter =>
                 <Counter 
                    key = {counter.id} 
                    onDelete = {onDelete} 
                    counter = {counter}
                    onIncrement = {onIncrement}
                    onDecrement = {onDecrement}
                    />
            )}
        </div>
        );
    }
}
 
export default Counters;