import React, { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/homePage";
import DetailPage from "./pages/detailPage";
import "./styles/styles.css";
import { getRestaurantList } from "./utils/api";


function App() {
  const [restaurants, setRestaurants] = useState([]);

  useEffect(() => {
    getRestaurantList().then((result) => {
      setRestaurants(result);
    });
  }, []);

  return (
    <div className="App">
      <main>
        <Routes>
          <Route path="/" element={<HomePage restaurants={restaurants} />} />
          <Route path="Restaurant/:id" element={<DetailPage />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
