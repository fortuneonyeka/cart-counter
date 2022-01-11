import React from 'react'


class Counter extends React.Component {
  
  state = {
    value: this.props.value,
    // imageUrl: 'https://picsum.photos/100'
    
  };
  //BINDING EVENT HANDLERS
  // constructor() {
  //   super()
  //   this.handleIncrement = this.handleIncrement.bind(this)
  // }
   handleIncrement = () => { 
    this.setState({ value:this.state.value + 1 })
  }
   handleDecrement = () => {
    this.setState({ value:this.state.value - 1 })
  }

  render() { 
    return (
      <div>
        {/* <img className="img m-4" src={this.state.imageUrl} alt="picsum" /> */}
        {this.props.children}
        <span className={this.getBadgeClasses()} style={{fontSize: 17}}>{this.formatCount()}</span>
        <button onClick={this.handleIncrement} className="btn btn-success btn-sm">Increment</button>
        <button onClick={this.handleDecrement} className="btn btn-danger btn-sm m-4">Decrement</button>
      </div>
     
    ) 
  }

  getBadgeClasses()
  {
    let classes = " m-2 badge bg-";
    classes += this.state.value === 0 ? "warning" : "primary";
    return classes;
  }

  formatCount () {
    const { value } = this.state;
    return value === 0 ? 'Zero' : value;
  }
}
 
export default Counter;