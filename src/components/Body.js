import ResCard from "./ResCard";
import {useState} from "react";
import resList from "../utils/mockData";

const Body = () => {
  const [listOfRestaurants, setListOfRestaurants] = useState(resList);

  return (
    <div className="body-container">
      <div className="searchBox">
        <input
          className="input"
          type="text"
          placeholder="search for restraunt, cuisine and dishes"
        ></input>
        <button className="btnSearch">Search</button>
      </div>
      <div className="filterSection">
        <button
          className="btnTopRated"
          onClick={() => {
            const filteredList = listOfRestaurants.filter(
              (res) => res.info.avgRating > 4
            );
            console.log(filteredList);
            setListOfRestaurants(filteredList);
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
        {listOfRestaurants.map((restaurant, i) => (
          <ResCard key={restaurant.info.id} resdata={restaurant} />
        ))}
      </div>
    </div>
  );
};

export default Body;
