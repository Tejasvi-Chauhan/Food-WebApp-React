import RestaurantCard from "./RestaurantCard";
import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";

const Body = () => {
  const [restaurantList, setRestaurantList] = useState([]);

  const [filteredRestaurent, setFilteredRestaurent] = useState([]);

  const [searchtext, setSearchText] = useState("");

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.6340537&lng=77.4455928&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );

    const json = await data.json();

    const restaurants =
      json?.data?.cards
        ?.map((card) => card?.card?.card)
        ?.find((c) => c?.gridElements?.infoWithStyle?.restaurants)?.gridElements
        ?.infoWithStyle?.restaurants || [];

    // console.log(json);
    setRestaurantList(restaurants);

    // console.log(
    //   json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    // );
    setFilteredRestaurent(restaurants);
  };

  return restaurantList.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="body">
      <div className="filter">
        <div className="filter-btns">
          <button
            className="btn"
            onClick={() => {
              let filteredRestaurent = restaurantList.filter(
                (res) => res.info.avgRating > 4.0
              );

              setFilteredRestaurent(filteredRestaurent);
            }}
          >
            Top Rated Restaurants
          </button>
        </div>
        <div className="search">
          <input
            type="text"
            className="search-box"
            value={searchtext}
            onChange={(event) => {
              setSearchText(event.target.value);
            }}
          />
          <button
            className="btn"
            onClick={() => {
              let filterRes = restaurantList.filter((res) =>
                res.info.name.toLowerCase().includes(searchtext.toLowerCase())
              );
              if (filterRes.length === 0) {
                return alert("No restaurant found");
              }
              // setRestaurantList(filterRes);
              setFilteredRestaurent(filterRes);
              setSearchText("");
            }}
          >
            Search
          </button>
        </div>
      </div>

      <div className="card-container">
        {filteredRestaurent.map((restaurant) => (
          <Link
            key={restaurant.info.id}
            to={"/restaurent/" + restaurant.info.id}
          >
            
            <RestaurantCard resData={restaurant} />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Body;
