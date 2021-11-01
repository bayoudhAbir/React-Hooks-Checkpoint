import './App.css';
import './Style.css';
import { v4 as uuidv4 } from 'uuid';
import React, { useState,useEffect, Children } from "react";
import MovieList from './component/MovieList';
import Header from './component/Header';
import Search from './component/Filter';
import AddMovies from './component/AddMovies'
import  StartRating from './component/StarRating'
function App() {
  
   const [movies, setMovies] = useState([
    { id: uuidv4(),
      title:"Harry Potter and Philosophers stone - Full movie",
      description:"Harry Potter and the Philosopher's Stone (released in the United States and India as Harry Potter and the Sorcerer's Stone) is a 2001 fantasy film directed by Chris Columbus and distributed by Warner Bros. Pictures, based on J. K. Rowling's 1997 novel of the same name. Produced by David Heyman and screenplay by Steve Kloves, it is the first instalment of the Harry Potter film series. The film stars Daniel Radcliffe as Harry Potter, with Rupert Grint as Ron Weasley, and Emma Watson as Hermione Granger.",
      posterURL:"https://www.youtube.com/embed/mNgwNXKBEW0",    
      rating:1
    },
    { id: uuidv4(),
      title:"Tom & Jerry",
      description:"A Day With Tom & Jerry. Classic Cartoon Compilation",
      posterURL:"https://www.youtube.com/embed/w3Wluvzoggg",    
      rating:5
    },
    { id: uuidv4(),
      title:"Home Alone2- Full Movie",
      description:"Once again, it is Christmas time, and the McCallister family is planning another vacation, only this time they are bound to go to Miami, Florida. Unfortunately, Kevin (Macaulay Culkin) separates from the rest of his family and goes to New York City. Kevin will soon realize that he will not only be alone in a big city, having a luxury suite at the Plaza, he will also reunite with his rivals Harry Lime (Joe Pesci) and Marv Merchants (Daniel Stern), who are planning to rob a toy store. Kevin plans to defeat the bandits once and for all by using traps to defeat them and save Duncan's Toy Chest.",
      posterURL:"https://www.youtube.com/embed/T_f5P65MGFU",
      rating:3
    }
    
  ])
  const [rating,setRating]=useState(1);

    const [searchTerm,setSearchTerm]=useState("");
    const [searchResults, setSearchResults] = useState(movies);
    const handleChange=(newsearchTerm) =>{
      setSearchTerm(newsearchTerm);
    }
    const add =newMovie=>{
      setMovies(c=>c.concat(newMovie))
     }
     
   /*useEffect(() => {
    const results =movies.filter(movies =>
        movies.title.toLowerCase().includes(searchTerm.toLowerCase())
    );
        setSearchResults(results);
     }, [searchTerm]);
 */
 console.log("movies",movies.length)
  return (
      <div>
          <Header/>
          <Search searchTerm={searchTerm} onChange={handleChange} rating={rating} setRating={setRating}/>
          <AddMovies  movies={movies} add={add} />
          <div style={{marginTop:40}}>
          <MovieList  movies={movies.filter(movies =>
        movies.title.toLowerCase().includes(searchTerm.trim().toLowerCase()) && movies.rating>=rating)} /> 
            
          </div>
        </div>
       
  );
  
}
export default App;

