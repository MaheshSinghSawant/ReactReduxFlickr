import React, {Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {getImages} from '../actions/index';

class SearchBar extends Component{
  constructor(props){
    super(props);

    this.state = {
      term:''
    }
  }

  handleChange(event){
    this.setState({term: event.target.value})
  }

  handleSubmit(event){
    event.preventDefault();
    this.props.getImages(this.state.term);
    this.setState({term:''})
  }

  render(){
    return(
      <form onSubmit={this.handleSubmit.bind(this)}>
      <input
      value={this.state.term}
      onChange={this.handleChange.bind(this)}/>
      <button>Submit</button>
      </form>

    )
  }
}

function mapDispatchToProps(dispatch){
  return bindActionCreators({getImages: getImages}, dispatch);
}

export default connect(null, mapDispatchToProps)(SearchBar);
