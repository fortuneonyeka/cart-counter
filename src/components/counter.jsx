import React from 'react'

class Counter extends React.Component {
  render() {
    return (
      <div>
        
        {/* <img className="img m-4" src={this.state.imageUrl} alt="picsum" /> */}
        {this.props.children}
        <span className={this.getBadgeClasses()} style={{fontSize: 17}}>{this.formatCount()}</span>
        <button onClick={ () => this.props.onIncrememnt(this.props.counter)} className="btn btn-success btn-sm">Increment</button>
        {/* <button onClick={this.props.onDecrement(this.props.counter)} className="btn btn-warning btn-sm m-2">Decrement</button> */}
        
        <button onClick={() => this.props.onDelete(this.props.counter.id)} className="btn btn-danger btn-sm m-2">Delete</button>
      </div>
     
    ) 
  }

  getBadgeClasses()
  {
    let classes = " m-2 badge bg-";
    classes += this.props.counter.value === 0 ? "warning" : "primary";
    return classes;
  }

  formatCount () {
    const { value } = this.props.counter;
    return value === 0 ? 'Zero' : value;
  }
}
 
export default Counter;