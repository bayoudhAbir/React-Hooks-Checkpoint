import React, {useState } from "react";
import  {FaStar} from "react-icons/fa"
const StarRating=(props)=>{

    return(
        <div>
            {[...Array(5)].map((star,i)=>{
                const ratingValue= i+1;
                return (
                <label>
                <input type="radio" name="rating" className="radio" value={props.rating}
                onClick={()=> props.setRating && props.setRating(ratingValue)}
                />
                    <FaStar  size={50} color={ratingValue<=props.rating?"#ffc107":"#e4e5e9"} className="star">{props.children}</FaStar>
                
                </label>
                );
            } 
            )}
        </div>
        
    )

}
export default StarRating;
