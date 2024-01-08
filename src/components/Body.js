import ResCard from "./ResCard";
import {useEffect, useState} from "react";
import {Link} from "react-router-dom";
import Shimmer from "./Shimmer";
import useOnlineStatus from "../utils/useOnlineStatus";
import useResList from "../utils/useResList";

const Body = () => {
  const [searchText, setSearchText] = useState("");

  const [
    listOfRestaurants,
    setListOfRestaurants,
    filteredRestaurants,
    setFilteredRestaurants,
  ] = useResList();

  // useEffect(() => {
  //   fetchData();
  // }, []);

  // const fetchData = async () => {
  //   const apiUrl = await fetch(
  //     "https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9351929&lng=77.62448069999999&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
  //   );
  //   const json = await apiUrl.json();

  //   setListOfRestaurants(
  //     json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants
  //   );
  //   setFilteredRestaurants(
  //     json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants
  //   );
  // };

  const onlineStatus = useOnlineStatus();

  if (onlineStatus !== true) {
    return (
      <h1>
        {" "}
        Hey buddy! Seems like you are offline, please check you internet
        connection.
      </h1>
    );
  }

  return listOfRestaurants.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="body-container">
      <div className="searchBox">
        <input
          className="input"
          type="text"
          placeholder="search for restraunt, cuisine and dishes"
          value={searchText}
          onChange={(e) => {
            setSearchText(e.target.value);
          }}
        ></input>
        <button
          className="btnSearch"
          onClick={() => {
            const filteredList = listOfRestaurants.filter((res) =>
              res.info.name.toLowerCase().includes(searchText.toLowerCase())
            );

            setFilteredRestaurants(filteredList);
          }}
        >
          Search
        </button>
      </div>
      <div className="filterSection">
        <button
          className="btnTopRated"
          onClick={() => {
            const filteredList = filteredRestaurants.filter(
              (res) => res.info.avgRating >= 4
            );
            console.log(filteredList);
            setFilteredRestaurants(filteredList);
          }}
        >
          Rating 4+
        </button>
      </div>
      <div className="resContainer">
        {/* <ResCard resdata={resList[0]} />
        <ResCard resdata={resList[1]} />
        <ResCard resdata={resList[2]} />
        <ResCard resdata={resList[3]} />
        <ResCard resdata={resList[4]} />
        <ResCard resdata={resList[5]} />
        <ResCard resdata={resList[6]} /> */}
        {filteredRestaurants.length &&
          filteredRestaurants.map((restaurant, i) => (
            <Link
              key={restaurant.info.id}
              to={"/restaurants/" + restaurant.info.id}
            >
              <ResCard resdata={restaurant} />
            </Link>
          ))}
      </div>
    </div>
  );
};

export default Body;
