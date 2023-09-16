import React from "react";
import { useNavigate } from "react-router-dom";
import RatingStar from "./ratingStar";
import { TbPointFilled } from "react-icons/tb";

const RestaurantItem = ({
  id,
  name,
  photo,
  rating,
  category,
  price_level,
  isclosed,
}) => {
  const navigate = useNavigate();
  return (
    <div className="restaurant-item">
      <div className="restaurant-info">
        <img className="poster" src={photo.images.original.url} alt="" />
        <h3>{name}</h3>
        <RatingStar rating={rating} />
        <div className="other-info">
          <div className="other-info-left">
            {category.name}{" "}
            <TbPointFilled style={{ color: "gray", fontSize: "15px" }} />{" "}
            {price_level}
          </div>
          <div className="other-info-right">
            <TbPointFilled
              style={
                isclosed
                  ? { color: "red", fontSize: "20px" }
                  : { color: "green", fontSize: "20px" }
              }
            />
            {isclosed ? "IS CLOSED" : "IS OPEN"}
          </div>
        </div>
      </div>
      <button
        className="btn__learn-more"
        onClick={() => {
          navigate(`Restaurant/${id}`);
        }}
      >
        LEARN MORE
      </button>
    </div>
  );
};

export default RestaurantItem;
