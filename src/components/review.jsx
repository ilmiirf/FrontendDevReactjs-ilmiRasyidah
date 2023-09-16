import React from "react";
import RatingStar from "./ratingStar";

const Review = ({ reviews }) => {
  return reviews ? (
    reviews.map((review, q) => {
      return (
        <div className="review-item" key={q}>
          <h3>{review.author}</h3>
          <RatingStar rating={review.rating} />
          <p>{review.summary}</p>
        </div>
      );
    })
  ) : (
    <h3>no review</h3>
  );
};

export default Review;
