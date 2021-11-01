import react from 'react';
import MovieCard from './MovieCard';
const movieList=props=>{
return(
    props.movies.map(el => <MovieCard key={el.id} movie={el} />)
)

}
export default movieList;