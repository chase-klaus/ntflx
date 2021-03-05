import MovieList from '../components/movielist';
import { fetchMovies } from '../utils/movies';

const Index = ({ movies }) => (
  <main>
    <h1>Discovery</h1>
    <MovieList movies={movies} />
  </main>
);

export const getStaticProps = async () => {
  const movies = await fetchMovies();
  return {
    props: {
      movies,
    },
    revalidate: 86400,
  };
};

export default Index;
