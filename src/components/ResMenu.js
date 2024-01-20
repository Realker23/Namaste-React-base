import {useState} from "react";
import Shimmer from "./Shimmer";
import {CDN_ITEM_IMAGE} from "../utils/constants";
import useRestaurantMenu from "../utils/useRestaurantMenu";
import {useParams} from "react-router-dom";
import RestaurantCategory from "./RestaurantCategory";

const ResMenu = () => {
  const [showIndex, setShowIndex] = useState(0);

  const {resId} = useParams();

  //fetching restaurant menu data.
  const resData = useRestaurantMenu(resId);

  if (resData === null) return <Shimmer />;

  const categories =
    resData?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR.cards.filter((c) => {
      return (
        c?.card?.card?.["@type"] ==
        "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
      );
    });

  const {itemCards} =
    resData?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card;

  const {
    name,
    cuisines,
    avgRating,
    costForTwoMessage,
    sla,
    locality,
    totalRatingsString,
  } = resData?.cards[0]?.card?.card?.info;

  return (
    <div className="w-6/12 m-auto p-4 bg-green-500 rounded-lg mt-8">
      <div className="flex items-center justify-between mb-2 pb-2 border-b-[1px] border-dashed">
        <div>
          <h1 className="text-2xl">{name}</h1>
          <p className="text-lg">{cuisines.join(", ")}</p>
          <p className="text-lg">{locality}</p>
        </div>
        <div className="flex flex-col items-center border-solid border-[1px] p-2 rounded-xl relative after:content-[''] after:bg-slate-400 after:w-4/5 after:h-[1px] after:top-[33px] after:absolute">
          <p>{avgRating} stars</p>
          <p>{totalRatingsString}</p>
        </div>
      </div>
      <div className="mb-8 border-b-[1px] pb-4">
        <span className="text-lg pr-4">{costForTwoMessage}</span>
        <span className="text-lg">{sla.slaString}</span>
      </div>
      <div>
        {categories.map((c, index) => {
          return (
            <RestaurantCategory
              key={c?.card?.card?.title}
              header={c?.card.card}
              showItems={index == showIndex}
              setShowIndex={() => {
                setShowIndex(index);
              }}
              setIndex={setShowIndex}
            />
          );
        })}
      </div>
      {/* <div>
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
            </div>
          </div>
        ))}
      </div> */}
    </div>
  );
};

export default ResMenu;
