import React, {useState} from "react";
import { v4 as uuidv4 } from 'uuid';
const AddMovies=(props)=>{
  const [ftitle, setTitle] = useState('');
  const [fdescription, setDescription] = useState('');
  const [fposterURL, setPosterURL ]= useState('');
  const handleTitleChange = event => {
    setTitle(event.target.value)
  };
  const handleDescriptionChange=event=>{
    setDescription(event.target.value)
   }
  const handleUrlChange=event=>{
    setPosterURL(event.target.value)
  }
  
  const handleSubmit= event => {
    event.preventDefault();
   /// const tabmovie=[...props.movies]
      const movie= {
        id: uuidv4(),
        title:ftitle,
        description:fdescription,
        posterURL:fposterURL,
        rating: "1",
      }
      //tabmovie.push(movie)
     // props.setMovie(tabmovie)   
     props.add(movie)
    } 
    return(
        <div className="containerForm">
          <form>              
                <label className="labels">Title of Movie</label>
                <input
                  type="text"
                  name="title"
                  onChange={handleTitleChange}
                  value={ftitle}
                  className="inputText"
                />
                <label className="labels">Desciption</label>
                <textarea
                  name="description"
                  onChange={handleDescriptionChange}
                  value={fdescription}
                  className="textArea"
                />
                <label className="labels">Movie URL</label>
                 <input 
                  type="url"
                  name="posteurl"
                  id="url"
                  onChange={handleUrlChange}
                  value={fposterURL}
                  className="inputText"
                />
              
              <button type="submit"  onClick={handleSubmit} className="addbatton">
                Submit
              </button>
           </form>
          </div>
    )

}
export default AddMovies;