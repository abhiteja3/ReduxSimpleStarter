export function selectMovie(movie){
  //selectMovie is an ActionCreator, it needs to return an action, an object with a type property
  return {
    type: 'MOVIE_SELECTED',
    payload: movie
  };
}