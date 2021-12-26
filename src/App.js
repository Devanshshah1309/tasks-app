import './App.css';
import Navbar from './components/navbar';
import Counters from './components/counters';
import react from 'react';
import React from 'react';

class App extends React.Component {
  state = {
    counters: [
        {id: "CS1101S", value: 4},
        {id: "CS12131S", value: 0},
        {id: "MA1521", value: 0},
        {id: "MA2001", value: 0}

    ]
};
handleDelete = (counterId) => {
    const newCounters = this.state.counters.filter(x => x.id!== counterId);
    this.setState({counters: newCounters});
}
handleReset = () => {
    const newCounters = this.state.counters.map(x => {
        x.value = 0;
        return x;
    });
    this.setState({counters: newCounters});
}
handleIncrement = (counter) => {
    const newCounters = [...this.state.counters];
    const index = newCounters.indexOf(counter);
    newCounters[index] = {...counter};
    newCounters[index].value++;
    this.setState({counters: newCounters});
}

handleDecrement = (counter) => {
  const newCounters = [...this.state.counters];
  const index = newCounters.indexOf(counter);
  newCounters[index] = {...counter};
  if (newCounters[index].value > 0) {
    newCounters[index].value--;
  }
  this.setState({counters: newCounters});
}
render() {
  return (
    <React.Fragment>
      <Navbar counters = {this.state.counters}/>
      <main className='container'>
        <Counters 
          onReset = {this.handleReset}
          onIncrement = {this.handleIncrement}
          onDecrement = {this.handleDecrement}
          onDelete = {this.handleDelete}
          counters = {this.state.counters} />
      </main> 
    </React.Fragment>
  
  );
}
}

export default App;
