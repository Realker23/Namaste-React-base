import {useEffect, useState} from "react";
import {MENU_API} from "./constants";

const useRestaurantMenu = (resId) => {
  const [resData, setResData] = useState(null);

  useEffect(() => {
    fetchMenu();
  }, []);

  const fetchMenu = async () => {
    const response = await fetch(
      MENU_API + resId + "&catalog_qa=undefined&submitAction=ENTER"
    );
    const json = await response.json();
    setResData(json.data);
  };

  return resData;
};

export default useRestaurantMenu;
