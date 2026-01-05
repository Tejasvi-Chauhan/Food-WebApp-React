import RestaurantCard ,{withpromotedlabel} from "./RestaurantCard";
import { useState, useEffect,useContext } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/UserContext";

const Body = () => {
  const [restaurantList, setRestaurantList] = useState([]);

  const [filteredRestaurent, setFilteredRestaurent] = useState([]);

  const [searchtext, setSearchText] = useState("");

  const RestaurentCardWithLabel=withpromotedlabel(RestaurantCard);

  const {LoggedInUser,setusername}=useContext(UserContext);

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
  const onlineStatus = useOnlineStatus();
  if(onlineStatus===false) return <h1>🔴 Offline, Please check your internet connection!!</h1>

  return restaurantList.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="body bg-pink-50">
      <div className="filter flex  m-4 gap-20">
        <div className="filter-btns">
          <button
            className="btn bg-red-300 p-2 m-2 rounded-lg hover:bg-red-400 w-2xs cursor-pointer"
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



        <div className="search ">
          <input
            type="text"
            className="search-box border-2 border-pink-300 p-2 m-2 rounded-4xl hover:border-pink-500 w-2xs"
            value={searchtext}
            onChange={(event) => {
              setSearchText(event.target.value);
            }}
          />
          <button
            className="btn  bg-red-300 px-5 py-2 m-2 rounded-lg hover:bg-red-400 cursor-pointer" 
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
          <label>User Name :</label>
          <input type="text" value={LoggedInUser} onChange={(e)=>{
              setusername(e.target.value)
          }} className=" border-2 p-2 "/>

      </div>

      <div className="card-container flex flex-wrap gap-4 justify-center">
        {filteredRestaurent.map((restaurant) => (
          <Link
            key={restaurant.info.id}
            to={"/restaurent/" + restaurant.info.id}
          >{
            restaurant.info.promoted ?< RestaurentCardWithLabel resData={restaurant} /> :< RestaurantCard resData={restaurant}/>
          }
                                  
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Body;
