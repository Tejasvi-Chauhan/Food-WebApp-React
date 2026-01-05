import { CDN_URL } from "../utils/constants.js";
import { useContext } from "react";
import UserContext from "../utils/UserContext.js";
const RestaurantCard = ({ resData }) => {
  const data = resData?.info || {};
  const {
    cloudinaryImageId,
    name,
    cuisines = [],
    avgRating,
    costForTwo,
    areaName,
    sla,
  } = data;

  const {LoggedInUser} = useContext(UserContext);

  return (
    <div className="card relative flex flex-col w-80 h-96 p-0 m-4 bg-pink-50 hover:shadow-lg shadow-2xl rounded-2xl hover:shadow-gray-400 transition duration-300 ease-in-out overflow-hidden">
      {/* Image */}
      <img
        className="card-img w-full object-cover block h-40"
        src={CDN_URL + cloudinaryImageId}
        alt="food"
      />

      {/* Card body */}
      <div className="card-body text-center mt-2 p-4 space-y-1 flex-1 flex flex-col justify-between min-h-0">
        <div>
          <h3 className="font-bold text-lg">
            {name} <span className="text-sm text-gray-500">({areaName})</span>
          </h3>
          <h4 className="text-sm text-gray-700">
            {(cuisines || []).join(", ")}
          </h4>
        </div>

        <div className="flex items-center justify-between mt-3">
          <div className="flex items-center gap-2">
            <span className="bg-yellow-400 text-black text-xs font-semibold px-2 py-0.5 rounded">
              {avgRating}⭐
            </span>
            <span className="border border-gray-300 text-gray-700 text-xs px-2 py-0.5 rounded">
              {costForTwo}
            </span>
          </div>
          <div className="text-sm text-gray-600">{sla?.deliveryTime} min</div>
          <div> User : {LoggedInUser}</div>
        </div>
      </div>
    </div>
  );
};

export const withpromotedlabel = (RestaurentCard) => {
  return (resData) => {
    return (
      <div className="relative inline-block">
        {/* Promoted badge for HOC */}
        <div className="absolute -top-3 -right-3 bg-black text-white text-xs font-bold px-3 py-1 rounded-full">
          Promoted
        </div>
        <RestaurentCard {...resData} />
      </div>
    );
  };
};

export default RestaurantCard;
