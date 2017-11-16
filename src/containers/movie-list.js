import React , { Component } from 'react';
import { connect } from 'react-redux';
import { selectMovie } from '../actions/index';
import { bindActionCreators } from 'redux';

class MovieList extends Component{
  renderList() {
    return this.props.movies.map((movie) => {
      return (
        <li
          onClick= {() => this.props.selectMovie(movie)}
          key={movie.title}
          className="list-group-item">
          {movie.title}
        </li>
      );
    });
  }

  render() {
    return (
      <ul className="list-group col-sm-4">
      {this.renderList()}
      </ul>
    )
  }
}

function mapStateToProps(state){
  return {
    movies: state.movies
  };
}
//Anything returned from the function will end up as props on movieList container
function mapDispatchToProps(dispatch){
  //whenever selectMovie is called result should be passed to all of our reducers
  return bindActionCreators({selectMovie: selectMovie}, dispatch)
}

//promote movieList from a component to a container - it needs to know about dispatch method, selectMovie
//make it available as a prop
export default connect (mapStateToProps, mapDispatchToProps)(MovieList);