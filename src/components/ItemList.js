import {CDN_ITEM_IMAGE} from "../utils/constants";
const ItemList = (props) => {
  const {list} = props;
  console.log(list);

  return (
    <div>
      {list.map((i) => (
        <div
          key={i.card.info.id}
          className="p-4 border-b-2 flex justify-between items-center"
        >
          <div className="w-9/12">
            <div>
              <p className="text-base font-medium">{i.card.info.name}</p>
              <p>₹ {(i.card.info.price || i.card.info.defaultPrice) / 100}</p>
            </div>
            <div className="text-sm ">{i.card.info.description}</div>
          </div>
          <div className="relative">
            <img
              className="w-28 h-24 rounded-md object-cover"
              src={CDN_ITEM_IMAGE + i.card.info.imageId}
            />
            <button className="absolute border-[1px] rounded-lg border-black top-[85%] left-[17%] px-2 bg-green-100">
              - Add +
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ItemList;
