import { CDN_URL } from "../utils/constants";

const ResturantCard = (props) => {
  const { resData } = props;

  const {
    cloudinaryImageId,
    name,
    avgRating,
    cuisines,
    costForTwo,
    areaName,
    deliveryTime,
  } = resData?.info;
  return (
    <div className="res-card">
      <img
        className="res-logo"
        alt="Slow internet detected"
        src={CDN_URL + cloudinaryImageId}
      />
      <h3>{name}</h3>
      <h4>⭐️ {avgRating} </h4>
      <h4>{cuisines.join(", ")}</h4>
      <h4>{costForTwo}</h4>
      <h4>{deliveryTime}</h4>
      <h4>{areaName.toLowerCase()}</h4>
    </div>
  );
};

export default ResturantCard;
