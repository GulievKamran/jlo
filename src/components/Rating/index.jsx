
import React from "react";

const RatingStar=({filled }) =>{
  return (
    <span 
    className={`star ${filled ?"filled": "empty"}`}
    style={{
      fontSize: "30px",
      marginRight:"5px",
      cursor: "pointer",
      fontSize:"24px",
      color: filled ? "gold" : "black" ,
    }}
    >
      &#9733;
    </span>
  );
};




const Rating = ({ totalStars = 5, rating = 5}) =>{
 

  return (
    <div>
      {Array.from({ length: totalStars }, (_, index) => (
        <RatingStar
          key={index}
          // size={size}
          filled={index < rating}
          // stroke={"gold"}
          // className="cursor-pointer"
          // onClick={() => handleStarClick(index)}
        />
      ))}
      {/* <div>{rating} / {totalStars}</div> */}
      <div style={{ fontSize:'16px', color: 'gray'}}>
        Reytinq: {rating} / {totalStars}
      </div>
    </div>
  );
};

export default Rating;