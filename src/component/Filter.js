import React,  {useState} from "react";
import StarRating from "./StarRating";
const Search=(props)=>{
       
    const handleChange = event => {props.onChange(event.target.value);};
    
    return(
        <div>
            <form id="form" className="serchForm"> 
            <input type="search" className="searchBox"  placeholder="Search" 
            value={props.searchTerm}
            onChange={handleChange}
            />
            <StarRating rating={props.rating} setRating={props.setRating}></StarRating>
          </form>
          
          </div>
        )
};
export default Search
