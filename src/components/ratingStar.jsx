import React from "react";
import { BsStarFill, BsStarHalf, BsStar } from "react-icons/bs";

const RatingStar = ({ rating }) => {
  if (rating === "5.0" || rating === "5") {
    return (
      <div className="rating-wrap">
        <BsStarFill />
        <BsStarFill />
        <BsStarFill />
        <BsStarFill />
        <BsStarFill />
      </div>
    );
  }
  if (rating === "4.5") {
    return (
      <div className="rating-wrap">
        <BsStarFill />
        <BsStarFill />
        <BsStarFill />
        <BsStarFill />
        <BsStarHalf />
      </div>
    );
  }
  if (rating === "4.0" || rating === "4") {
    return (
      <div className="rating-wrap">
        <BsStarFill />
        <BsStarFill />
        <BsStarFill />
        <BsStarFill />
        <BsStar />
      </div>
    );
  }
};

export default RatingStar;
