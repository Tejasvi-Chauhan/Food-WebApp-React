import { useState, useEffect } from "react";
import ShimmerCard from "./Shimmer";
import { useParams } from "react-router-dom";
import useRestaurentMenu from "../utils/useRestaurentMenu.js";


const RestaurentMenu = () => {
  
  const { resId } = useParams();
  console.log(resId);
  const resData = useRestaurentMenu(resId);

  if (resData === null) return <ShimmerCard />;
  console.log(resData);
  const { name, cuisines, costForTwoMessage } =
    resData?.cards[2]?.card?.card?.info;

  const { itemCards } =
    resData?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card;
  console.log(itemCards);

  return (
    <div>
      <h1>{name}</h1>
      <p>
        {" "}
        {cuisines.join(", ")}
        {costForTwoMessage}{" "}
      </p>

      <h2>Menu</h2>
      <ul>
        {itemCards?.map((item) => (
            <div key={item.card.info.id}>{item.card.info.name}</div>
        
        ))}
      </ul>
    </div>
  );
};
export default RestaurentMenu;
