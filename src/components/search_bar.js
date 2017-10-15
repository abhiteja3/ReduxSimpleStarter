import React, {Component} from 'react';

export default class SearchBar extends Component{
  constructor(props){
    super(props);
    
    this.state = {term: ''};
  }
  render() {
    return (
      <div>
        <input onChange = {event => this.setState({term: event.target.value})}/>
        <p>value of input: {this.state.term}</p>
      </div>
  )
  }
}