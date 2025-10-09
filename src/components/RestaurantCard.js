import { CDN_URL } from "../utils/constants.js";
const RestaurantCard = ({ resData }) => {
  const data = resData?.info;
  const {cloudinaryImageId
, name, cuisines, avgRating, costForTwo,areaName ,sla} = data;

  return (
    <div className="card">
      <img
        className="card-img"
        src={CDN_URL + cloudinaryImageId}
        alt="food"
      />
      <h3>{ name},  ({areaName})</h3>
      <h4>{cuisines.join(", ")}</h4>
      <h4> {avgRating}⭐</h4>
      <h4>{costForTwo}</h4>
      <h4>{sla?.deliveryTime} minutes</h4>

     
    </div>
  );
};

export default RestaurantCard;
