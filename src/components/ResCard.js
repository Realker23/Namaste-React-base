import {CDN_URL} from "../utils/constants";

const ResCard = (props) => {
  const {resdata} = props;
  // destructure the data

  // console.log(resdata);

  const {cloudinaryImageId, name, cuisines, avgRating, sla} = resdata.info;
  return (
    <div
      data-testid="resList"
      className="w-64 h-[336px] p-2 mx-4 rounded-lg hover:scale-105 hover:bg-green-500 transition-all my-2"
    >
      {/* <img
          src={
            "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/" +
            resdata.info.cloudinaryImageId
          }
          alt="resLogo"
        />
        <h2>{resdata.info.name}</h2>
        <p>{resdata.info.cuisines.slice(0, 3).join(", ")}</p>
        <p>{resdata.info.avgRating} stars</p>
        <p> {resdata.info.sla.slaString} </p> */}
      <img
        className="w-full h-44 rounded-lg"
        src={CDN_URL + cloudinaryImageId}
        alt="resLogo"
      />
      <h2 className="font-bold">{name}</h2>
      <p>{cuisines.slice(0, 3).join(", ")}</p>
      <p>{avgRating} stars</p>
      <p> {sla.slaString} </p>
    </div>
  );
};

//higher order component -
export const withFasterLable = (ResCard) => {
  return (props) => {
    return (
      <div>
        <label className="absolute px-2 ml-2 bg-black text-cyan-50 rounded-lg z-10">
          Faster
        </label>
        <ResCard {...props} />
      </div>
    );
  };
};

export default ResCard;
