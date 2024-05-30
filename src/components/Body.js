import ResturantCard from "./ResturantCard";
import { resList } from "../utils/mockData";
import { useState } from "react";

const Body = () => {
  let [listOfResturants, setListOfResturants] = useState(resList);
  console.log(resList);
  return (
    <div className="body-container">
      <div className="filter">
        <button
          className="filter-btn"
          onClick={() => {
            const filteredList = listOfResturants.filter(
              (resturant) => resturant.info.avgRating > 4
            );

            setListOfResturants(filteredList);
          }}
        >
          Top Rated restaurants
        </button>
      </div>
      <div className="res-container">
        {listOfResturants.map((resturant) => (
          <ResturantCard key={resturant.info.id} resData={resturant} />
        ))}
      </div>
    </div>
  );
};

export default Body;
