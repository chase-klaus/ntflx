import fetch from 'isomorphic-unfetch';

export const fetchMovies = async () => {
  const response = await fetch('https://movied.herokuapp.com/discover');
  const movies = await response.json();
  return movies.map((movie: any) => ({
    image: `https://image.tmdb.org/t/p/w300${movie.backdrop_path}`,
    title: movie.title,
    id: movie.id,
  }));
};

export const fetchMovieById = async (id) => {
  const response = await fetch(`https://movied.herokuapp.com/movie/${id}`);
  const movie = await response.json();
  return movie;
};
