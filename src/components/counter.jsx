import React from 'react'

class Counter extends React.Component {
  state = {
    count: 1,
    // imageUrl: 'https://picsum.photos/100'
    
  };
  
  render() { 
    return (
      <div>
        {/* <img className="img m-4" src={this.state.imageUrl} alt="picsum" /> */}
        <span className={this.getBadgeClasses()} style={{fontSize: 17}}>{this.formatCount()}</span>
        <button className="btn btn-secondary btn-sm">Increment</button>
      </div>
     
    ) 
  }

  getBadgeClasses()
  {
    let classes = " m-2 badge bg-";
    classes += this.state.count === 0 ? "warning" : "primary";
    return classes;
  }

  formatCount () {
    const { count } = this.state;
    return count === 0 ? 'Zero' : count;
  }
}
 
export default Counter;