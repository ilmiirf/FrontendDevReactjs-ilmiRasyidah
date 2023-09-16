import React from "react";
import RestaurantItem from "./restaurantItem";
import RestaurantEmpty from "./restaurantEmpty";

const RestaurantList = ({ restaurants }) => {
  return restaurants.length > 0 ? (
    <>
      <h2 className="title-list">All Restaurants</h2>
      <div className="restaurant-list-item">
        <RestaurantListItem restaurants={restaurants} />
      </div>
      <div className="load-more">
        <button className="btn__load-more">LOAD MORE</button>
      </div>
    </>
  ) : (
    <RestaurantEmpty />
  );
};

const RestaurantListItem = ({ restaurants }) => {
  return restaurants.map((resto) => {
    return (
      <RestaurantItem
        key={resto.location_id}
        id={resto.location_id}
        {...resto}
      />
    );
  });
};

export default RestaurantList;
