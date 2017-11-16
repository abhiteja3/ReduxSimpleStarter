import React, { Component } from 'react';
import { connect } from 'react-redux';

class MovieDetail extends Component {
  render() {
    if(!this.props.movie){
      return <div>Select a book to get started</div>
    }
    return (
      <div>
        <h3>Details for :</h3>
        <div>{this.props.movie.title}</div>
        <div>{this.props.movie.pages}</div>
      </div>
    );
  }
}

function mapStateToProps(state){
  return {
    movie: state.activeMovie
  };
}

export default connect (mapStateToProps)(MovieDetail);