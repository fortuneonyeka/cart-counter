import React from 'react'
import Counter from "./counter";

class Counters extends React.Component {
  state = {
    counters: [
      {id: 1, value: 0},
      {id: 2, value: 4},
      {id: 3, value: 0},
      {id: 4, value: 0}
    ]
  }
  
  handleIncrement = (counter) => { 
    const counters = [...this.state.counters];
    const index = counters.indexOf(counter)
    counters[index] = { ...counter }
    counters[index].value ++
    this.setState({counters})
  }
  //  handleDecrement = (counter) => {
  //   const dcounters = [...this.state.counters];
  //   const index = dcounters.indexOf(counter)
  //   dcounters[index] = { ...counter }
  //   dcounters[index].value -=
  //   this.setState({dcounters})
  // }

  //RULL OF THUMB:ONLY THE COMPONENTS THAT OWNS A STATE CAN MODIFY IT
  //HENCE WE RAISED THE EVENT HANDLE HERE PASS IT AS PROP TO counter.js
  handleDelete = (id) => {
    const data = this.state.counters.filter(item => item.id !== id)
    this.setState({counters:data}) 
    
  }

  handleReset = () => {
    const counters = this.state.counters.map(i => {
      i.value = 0;
      return i;
    });
    this.setState({counters})
  }

  render() { 
    return <div>
      <button onClick={this.handleReset} className="btn btn-primary btn-sm m-2">Reset</button>

      {this.state.counters.map(counter => <Counter key={counter.id} counter={counter} onDelete={this.handleDelete} onIncrememnt={this.handleIncrement} ><h4>Product:{counter.id}</h4></Counter>)}
    </div>;
  }
}
 
export default Counters;