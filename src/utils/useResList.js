import {useEffect, useState} from "react";

const useResList = () => {
  const [listOfRestaurants, setListOfRestaurants] = useState([]);
  const [filterResList, setfilterResList] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await fetch(
        "https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9351929&lng=77.62448069999999&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
      );
      const json = await response.json();
      setListOfRestaurants(
        json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle
          ?.restaurants
      );
      setfilterResList(
        json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle
          ?.restaurants
      );
    } catch (error) {
      console.log("swiggy api error", error);
    }
  };

  return [
    listOfRestaurants,
    setListOfRestaurants,
    filterResList,
    setfilterResList,
  ];
};

export default useResList;
