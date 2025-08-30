import RestaurentCard from "./RestaurentCard";
import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";

const Body = () => {
  const [listOfRestaurant, setListOfRestaurant] = useState([]);
const [searchText,setSearchText]=useState("");
const [filteredRestaurant,setFilteredRestaurant] = useState([]);
  useEffect(() => {
    fetchData();
  }, []);
console.log("render");
  const fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=17.42947578308024&lng=78.44654400320442&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );
    const json = await data.json();
    console.log(json);
    setListOfRestaurant(
      json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
     setFilteredRestaurant(
      json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
  };

  if (listOfRestaurant.length === 0) {
    return <Shimmer />;
  }

  return (
    <div className="body">
      <div className="filter">
        <div className="search">
          <button className="search-btn" onClick={() => {
            const filteredRestaurant = listOfRestaurant.filter(
                (res) => res.info.name.toLowerCase().includes(searchText.toLowerCase())
            );
            setFilteredRestaurant(filteredRestaurant)
          }}>Search</button>
          <input type="text" value={searchText}  
             onChange={ (e) => {
            setSearchText(e.target.value)
          }}/>
        </div>
        <button
          className="filter-btn"
          onClick={() => {
            const filteredList = listOfRestaurant.filter(
              (res) => res.info.avgRating > 4.2
            );
            setListOfRestaurant(filteredList);
          }}
        >
          Top Rated Restaurants
        </button>
      </div>
      <div className="res-container">
        {filteredRestaurant.map((restaurent) => (
          <RestaurentCard key={restaurent.info.id} resData={restaurent} />
        ))}
      </div>
    </div>
  );
};

export default Body;
