import ResCard from "./ResCard";
import {useEffect, useState} from "react";
// import resList from "../utils/mockData";
import Shimmer from "./Shimmer";

const Body = () => {
  // using state variable - using useState - hook
  const [listOfRestaurants, setListOfRestaurants] = useState([]);
  const [searchText, setSearchText] = useState("");

  //it will render the body first and then call the callback function inside useEffect()- hook - bcoz we are using 2nd way to render the data ->  render-> api call -> rerender
  useEffect(() => {
    fetchData();
  }, []);

  // console.log("body rendered");
  const [filteredRestaurants, setFilteredRestaurants] = useState([]);

  const fetchData = async () => {
    const apiUrl = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9351929&lng=77.62448069999999&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );
    const json = await apiUrl.json();

    setListOfRestaurants(
      json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
    setFilteredRestaurants(
      json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
  };

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
        {filteredRestaurants.map((restaurant, i) => (
          <ResCard key={restaurant.info.id} resdata={restaurant} />
        ))}
      </div>
    </div>
  );
};

export default Body;
