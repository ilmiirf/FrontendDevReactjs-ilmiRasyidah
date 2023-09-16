import React, { useState } from "react";
import RestaurantList from "../components/restaurantList";

const HomePage = ({ restaurants }) => {
  const [filters, setFilters] = useState({
    is_closed: null,
    category: "",
    price_level: "",
  });

  const onFilterRestaurant = restaurants.filter((restaurant) => {
    const isClosedPass =
      filters.is_closed === null || restaurant.is_closed === filters.is_closed;
    const categoryPass =
      filters.category === "" ||
      (restaurant.category && restaurant.category.name) === filters.category;
    const pricePass =
      filters.price_level === "" ||
      restaurant.price_level === filters.price_level;
    return isClosedPass && categoryPass && pricePass;
  });

  const handlerIscloseChange = (event) => {
    const value = event.target.value === "false";
    setFilters({ ...filters, is_closed: value });
  };

  const handlerCategoryChange = (event) => {
    setFilters({ ...filters, category: event.target.value });
  };
  const handlerPriceChange = (event) => {
    setFilters({ ...filters, price_level: event.target.value });
  };

  const handlerClear = () => {
    setFilters({ ...filters, is_closed: null, category: "", price_level: "" });
  };

  return (
    <>
      <header>
        <h1>Restaurants</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
          fringilla libero a turpis viverra vehicula. Sed ac pellentesque
          ligula, ac pharetra justo. Donec ut erat vitae tortor accumsan
          convallis. Aenean ornare commodo purus sed semper. Sed fermentum et mi
          ac condimentum. Etiam sed sagittis ex, in imperdiet urna.
        </p>
      </header>
      <main>
        <div className="filter-section">
          <div className="filter-item">
            <p>Filter By : </p>
            <div className="filter-open">
              <input
                type="radio"
                value="false"
                onChange={handlerIscloseChange}
              />{" "}
              Open Now
            </div>
            <div className="filter-select-price">
              <select value={filters.price_level} onChange={handlerPriceChange}>
                <option value="">Price</option>
                <option value="$">$</option>
                <option value="$$">$$</option>
                <option value="$$$">$$$</option>
                <option value="$$$$">$$$$</option>
              </select>
            </div>
            <div className="filter-select-category">
              <select value={filters.category} onChange={handlerCategoryChange}>
                <option value="">Category</option>
                <option value="Restaurant">Restaurant</option>
                <option value="Cafe">Cafe</option>
              </select>
            </div>
          </div>
          <button className="btn__clear" onChange={handlerClear}>
            Clear All
          </button>
        </div>
        <div className="restaurant-list-section">
          <div className="restaurant-list">
            <RestaurantList restaurants={onFilterRestaurant} />
          </div>
        </div>
      </main>
    </>
  );
};
export default HomePage;
