import React from 'react'
import Counter from "./counter";

class Counters extends React.Component {
  render() { 
    return <div>
      <button 
      onClick={this.props.onReset} className="btn btn-primary btn-sm m-2">Reset</button>

      {this.props.counters.map(counter => 
      <Counter key={counter.id} 
      onDelete={this.props.onDelete} 
      onIncrememnt={this.props.onIncrememnt} 
      counter={counter} ><h4>Product:{counter.id}</h4></Counter>)}
    </div>;
  }
}
export default Counters;