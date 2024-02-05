import ItemList from "./ItemList";
import {useState} from "react";

const RestaurantCategory = ({header, showItems, setShowIndex, setIndex}) => {
  //   accordionToggle.addEventListener(click, () => {
  //
  //   });

  function enableToggle() {
    if (showItems) {
      // console.log("true");
      setIndex(null);
    } else {
      setShowIndex();
    }
  }

  return (
    <div className="w-full p-4 bg-green-100 mb-2 rounded-lg mt-4 ">
      <div className="flex justify-between " onClick={enableToggle}>
        <span className="text-lg font-semibold py-4">
          {header.title} ({header.itemCards.length})
        </span>
        <span className="toggle text-lg font-bold p-4 cursor-pointer">
          {showItems ? "-" : "+"}
        </span>
      </div>

      {showItems && <ItemList list={header.itemCards} />}
    </div>
  );
};

export default RestaurantCategory;
