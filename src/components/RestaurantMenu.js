
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import useRestaurantMenu from "../utils/useRestaurantMenu";

const RestaurantMenu = () => {
  const {resId}=useParams();
   const resInfo=useRestaurantMenu(resId);
 
  if (resInfo === null) return <Shimmer />;

  // restaurant info
  const { name, cuisines, costForTwoMessage } =
    resInfo?.data?.cards?.[2]?.card?.card?.info || {};

  // menu items
 const getItemCards = (card) => {
  return card?.categories?.[0]?.itemCards || card?.itemCards || [];
};

const card =
  resInfo?.data?.cards?.[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards?.[2]
    ?.card?.card;

const itemCards = getItemCards(card);

console.log( resInfo?.data?.cards?.[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards);
  return (
    <div className="resCardInfo">
      <h1>{name}</h1>
      <p>
        {cuisines?.join(", ")} - {costForTwoMessage}
      </p>
      <ul>
        {itemCards.map((item) => (

          <li key={item.card.info.id}>
            {item.card.info.name} - {item.card.info.price / 100 || item.card.info.defaultPrice / 100} ₹
          </li>
        ))}
      </ul>
    </div>
  );
};

export default RestaurantMenu;
