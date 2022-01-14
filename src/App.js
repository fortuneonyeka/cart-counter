import './App.css';
import NavBar from "./components/NavBar";
import Counters from "./components/counters";
import { Component } from "react";

class App extends Component {
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
  return (
    <div className="App">
      <NavBar totalCounters={this.state.counters.filter(c => c.value > 0).length}/>
      <main className="container">
      <Counters 
     counters={this.state.counters} 
     onReset={this.handleReset} 
     onIncrememnt={this.handleIncrement} 
     onDelete={this.handleDelete}/>
      </main>
    </div>
  );
}
}

export default App;
