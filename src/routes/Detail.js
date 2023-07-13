import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import styles from './Detail.module.css';
function Detail() {
  const [movie, setMovie] = useState([]);
  const { id } = useParams();
  const getMovie = async () => {
    const json = await (
      await fetch(`https://yts.mx/api/v2/movie_details.json?movie_id=${id}`)
    ).json();
    setMovie(json.data.movie);
  };

  useEffect(() => {
    getMovie();
  }, []);

  const genres = movie.genres || [];

  return (
    <div className={styles.detail}>
      <img src={movie.medium_cover_image} className={styles.detail__img} />
      <h1 className={styles.detail__title}>{movie.title}</h1>
      {genres.map((g) => (
        <li className={styles.detail__genres} key={g}>
          {g}
        </li>
      ))}
      <h2 className={styles.detail__year}>rating: {movie.rating}</h2>
      <h3 className={styles.detail__year}>runtime: {movie.runtime}</h3>
      <h4 className={styles.detail__year}>year: {movie.year}</h4>
      <h5 className={styles.detail__year}>likes: {movie.like_count}</h5>
    </div>
  );
}

export default Detail;
