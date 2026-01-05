import { useEffect, useState } from "react";
import { MENU_API } from "../utils/constants";

const useRestaurentMenu = (resId) => {
  const [resData, setresData] = useState(null);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(MENU_API + resId);
    const json = await data.json();
    console.log(json);
    setresData(json?.data);
  };
  return resData;
};
export default useRestaurentMenu;
