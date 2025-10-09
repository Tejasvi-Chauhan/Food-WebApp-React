import { useState, useEffect } from "react";
import ShimmerCard from "./Shimmer";
import { useParams } from "react-router-dom";
import { MENU_API } from "../utils/constants";


const RestaurentMenu = () => {
  const [resData, setresData] = useState(null);
  const { resId } = useParams();
  console.log(resId)

  useEffect(() => {
    fetchMenu();
  }, []);

const fetchMenu = async () => {
    const menu = await fetch(MENU_API+resId);
 
    const json = await menu.json();
    console.log(json);
    setresData(json?.data);
  };  

  if (!resData) {
    return <ShimmerCard />;
  }

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
