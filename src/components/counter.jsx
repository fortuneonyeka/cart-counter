import React from 'react'

class Counter extends React.Component {
  state = {
    count: 1,
    tags: ['tag1', 'tag2', 'tag3', 'tag4', 'tag5']
  };

  renderTags() {
    if (this.state.tags.length === 0) return <p>There are no tags</p>
    return <ul className='tags' style={{listStyle: 'none'}}>{this.state.tags.map(tag => <li key={tag}>{tag}</li>)}</ul>
    
  }
  
  render() { 
    return (
      <div className="content">
        {this.state.tags.length > 3 && 'you are qualified for 10% discount'}
        {this.renderTags()}
      </div>
     
    ) 
  }
}
 
export default Counter;