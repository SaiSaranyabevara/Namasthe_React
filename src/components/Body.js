import RestaurentCard from "./RestaurentCard";
import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import useListOfRestaurants from "../utils/useListOfRestaurants";
import Offline from "./Offline";

const Body = () => {
  const listOfRestaurant = useListOfRestaurants();
  const [searchText, setSearchText] = useState("");
  const [filteredRestaurant, setFilteredRestaurant] = useState([]);

// const RestaurentCardPromoted=withPromotedLabel(RestaurentCard);

  const onlineStatus = useOnlineStatus();

  // ✅ Initialize filteredRestaurant when listOfRestaurant is fetched
  useEffect(() => {
    setFilteredRestaurant(listOfRestaurant);
  }, [listOfRestaurant]);

  if (!onlineStatus) return <Offline />;
  if (listOfRestaurant.length === 0) return <Shimmer />;

  return (
    <div className="body">
      <div className="filter">
        <div className="search">
          <input
            type="text"
            value={searchText}
            placeholder="Search restaurants"
            onChange={(e) => setSearchText(e.target.value)}
          />
          <button
            className="search-btn"
            onClick={() => {
              const filtered = listOfRestaurant.filter((res) =>
                res.info.name.toLowerCase().includes(searchText.toLowerCase())
              );
              setFilteredRestaurant(filtered);
            }}
          >
            Search
          </button>
        </div>
        <button
          className="filter-btn"
          onClick={() => {
            const filteredList = listOfRestaurant.filter(
              (res) => res.info.avgRating > 4.2
            );
            setFilteredRestaurant(filteredList);
          }}
        >
          Top Rated Restaurants
        </button>
      </div>

      <div className="res-container">
        {filteredRestaurant.length === 0 ? (
          <p>No restaurants found</p>
        ) : (
          filteredRestaurant.map((restaurant) => (
            <Link
              key={restaurant.info.id}
              to={"/restaurants/" + restaurant.info.id}
            >
              {/* {restaurant.data.promoted ?( <RestaurentCardPromoted resData={restaurant}/> ): ( <RestaurentCard resData={restaurant} />)} */}
              <RestaurentCard resData={restaurant} />
            </Link>
          ))
        )}
      </div>
    </div>
  );
};

export default Body;
