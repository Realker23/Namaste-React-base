import {useState} from "react";
import Shimmer from "./Shimmer";
import {CDN_ITEM_IMAGE} from "../utils/constants";
import useRestaurantMenu from "../utils/useRestaurantMenu";
import {useParams} from "react-router-dom";

const ResMenu = () => {
  const [count, setCount] = useState(0);

  const {resId} = useParams();

  const resData = useRestaurantMenu(resId);

  if (resData === null) return <Shimmer />;

  const {cards} = resData?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR;
  console.log(cards);

  const {itemCards} =
    resData?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card;

  console.log(itemCards);

  const {
    name,
    cuisines,
    avgRating,
    costForTwoMessage,
    sla,
    locality,
    totalRatingsString,
  } = resData?.cards[0]?.card?.card?.info;

  const decrement = () => {
    let decrementCounter = count - 1;
    if (decrementCounter < 0) {
      setCount(0);
    } else {
      setCount(decrementCounter);
    }
  };

  const increment = () => {
    let incrementCounter = count + 1;
    {
      setCount(incrementCounter);
    }
  };

  return (
    <div className="restaurantDetails">
      <div className="resInfo">
        <div>
          <h1>{name}</h1>
          <p>{cuisines.join(", ")}</p>
          <p>{locality}</p>
        </div>
        <div className="resRating">
          <p>{avgRating} stars</p>
          <p>{totalRatingsString}</p>
        </div>
      </div>
      <div className="resDeliveryInfo">
        <span>{costForTwoMessage}</span>
        <span>{sla.slaString}</span>
      </div>

      <div>
        {itemCards.map((item) => (
          <div className="restaurantItem" key={item.card.info.id}>
            <div className="itemInfo">
              <div className="itemName">
                <h1>{item.card.info.name}</h1>
                <h3>
                  - ₹{" "}
                  {(item.card.info.defaultPrice || item.card.info.price) / 100}
                </h3>
              </div>
              <div className="itemDescription">
                <p>{item.card.info.description}</p>
              </div>
            </div>
            <div className="resAdd">
              <img
                src={CDN_ITEM_IMAGE + item.card.info.imageId}
                onError={(e) => {
                  e.onerror = null;
                }}
              ></img>
              <div className="btn-add">
                <h2>Add</h2>
                <div className="itemQuantity">
                  <div className="decrease" onClick={decrement}>
                    -
                  </div>
                  <div className="number">{count}</div>
                  <div className="increase" onClick={increment}>
                    +
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ResMenu;
