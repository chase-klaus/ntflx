import { fetchMovieById, fetchMovies } from '../../utils/movies';

const MoviePage = ({ movie }) => (
  <div>
    <h1>{ movie.title }</h1>
    <p>{ movie.overview }</p>
  </div>
);

export const getStaticProps = async ({ params }) => {
  const movie = await fetchMovieById(params.id);
  return {
    props: {
      movie,
    },
    revalidate: 86400,
  };
};

export const getStaticPaths = async () => {
  const movies = await fetchMovies();
  return {
    paths: movies.map((movie) => ({
      params: {
        id: movie.id.toString(),
      },
    })),
    fallback: false,
  };
};

export default MoviePage;
