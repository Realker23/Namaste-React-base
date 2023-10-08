import {CDN_URL} from "../utils/constants";

const ResCard = (props) => {
  const {resdata} = props;
  // destructure the data
  const {cloudinaryImageId, name, cuisines, avgRating, sla} = resdata.info;
  return (
    <div className="resCard">
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
      <img src={CDN_URL + cloudinaryImageId} alt="resLogo" />
      <h2>{name}</h2>
      <p>{cuisines.slice(0, 3).join(", ")}</p>
      <p>{avgRating} stars</p>
      <p> {sla.slaString} </p>
    </div>
  );
};

export default ResCard;
