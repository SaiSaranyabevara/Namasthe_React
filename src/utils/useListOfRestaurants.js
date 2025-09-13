import { useEffect, useState } from "react";

const useListOfRestaurants = () => {
  const [listOfRestaurant, setListOfRestaurant] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const data = await fetch(
        "https://www.swiggy.com/dapi/restaurants/list/v5?lat=18.2873787&lng=83.8262197&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
      );
      const json = await data.json(); // ✅ await here
      setListOfRestaurant(
        json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants || []
      );
    } catch (error) {
      console.error("Error fetching restaurants:", error);
      setListOfRestaurant([]);
    }
  };

  return listOfRestaurant;
};

export default useListOfRestaurants;
