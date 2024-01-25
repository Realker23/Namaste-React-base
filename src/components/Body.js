import ResCard, {withFasterLable} from "./ResCard";
import {useContext, useState} from "react";
import {Link} from "react-router-dom";
import Shimmer from "./Shimmer";
import useOnlineStatus from "../utils/useOnlineStatus";
import useResList from "../utils/useResList";
import UserContext from "../utils/UserContext";

const Body = () => {
  const [searchText, setSearchText] = useState("");
  const {loggedinUser, setUserName} = useContext(UserContext);

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
  const ResCardFaster = withFasterLable(ResCard);

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
    <div className="mt-8">
      <div className="w-full flex items-center justify-evenly">
        <input
          className="w-3/4 h-8 border-gray-600 rounded-lg p-2  focus:outline-none  focus:border-2 focus:border-teal-500"
          type="text"
          placeholder="search for restraunt, cuisine and dishes"
          value={searchText}
          onChange={(e) => {
            setSearchText(e.target.value);
          }}
        ></input>
        <button
          className="btnSearch outline-0 bg-gray-400 rounded-lg shadow-lg px-6 py-2 shadow-gray-400 hover:bg-gray-500"
          onClick={() => {
            const filteredList = listOfRestaurants.filter((res) =>
              res.info.name.toLowerCase().includes(searchText.toLowerCase())
            );

            setFilteredRestaurants(filteredList);
          }}
        >
          Search
        </button>
        <input
          className=" h-8 border-gray-600 rounded-lg p-2  focus:outline-none  focus:border-2 focus:border-teal-500"
          type="text"
          placeholder="User name"
          value={loggedinUser}
          onChange={(e) => {
            setUserName(e.target.value);
          }}
        ></input>
      </div>
      <div className="flex justify-center items-center">
        <button
          className="  bg-green-300 rounded-lg px-6 py-2 my-2 active:bg-green-400 "
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
      <div className="flex flex-wrap mt-8 justify-evenly">
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
              {restaurant.info.sla.deliveryTime < 25 ? (
                <ResCardFaster resdata={restaurant} />
              ) : (
                <ResCard resdata={restaurant} />
              )}
            </Link>
          ))}
      </div>
    </div>
  );
};

export default Body;
