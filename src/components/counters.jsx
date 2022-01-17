import React from 'react'
import Counter from "./counter";

const Counters = (props) => {
  const {onIncrememnt, onReset, onDelete, counters} = props
  return ( 
     <div>
      <button 
      onClick={onReset} className="btn btn-primary btn-sm m-2">Reset</button>

      {counters.map(counter => 
      <Counter key={counter.id} 
      onDelete={onDelete} 
      onIncrememnt={onIncrememnt} 
      counter={counter} ><h4>Product:{counter.id}</h4></Counter>)}
    </div>
   );
}
 
export default Counters;