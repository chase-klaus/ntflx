/* eslint-disable jsx-a11y/anchor-is-valid */
import { FunctionComponent } from 'react';
import Link from 'next/link';
import { Movie } from '../type';

import css from './movielist.module.scss';

interface MovieListProps {
  movies: Movie[];
}

const MovieList: FunctionComponent<MovieListProps> = ({ movies }) => (
  <div className={css.movielist}>
    {
      movies.map((movie: Movie) => (
        <div className={css.moviecard} key={movie.id}>
          <Link href={`/movies/${movie.id}`}>
            <a className={css['moviecard-link']}>
              { movie.title }
              <style jsx>
                {`
                  background-image: url('${movie.image}');
                `}
              </style>
            </a>
          </Link>
        </div>
      ))
    }
  </div>
);

export default MovieList;
