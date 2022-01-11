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
  
  handleDelete = (id) => {
    const data = this.state.counters.filter(item => item.id !== id)
    this.setState({counters:data}) 
    
  }
  render() { 
    return <div>
      
      {this.state.counters.map(counter => <Counter key={counter.id} counter={counter} onDelete={this.handleDelete}><h4>Product:{counter.id}</h4></Counter>)}
    </div>;
  }
}
 
export default Counters;