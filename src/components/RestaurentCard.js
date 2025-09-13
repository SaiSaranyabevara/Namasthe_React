import {CDN_URL} from "../utils/constants"

const RestaurentCard = (props) =>{
    const {resData}=props;
    const {
       cuisines,avgRating,sla,name
    }=resData?.info;
   
    
    return (
        <div className="res-card">
            <img className='res-logo' src={CDN_URL+resData.info.cloudinaryImageId} />
            <h3> {name}</h3>
            <p>{[cuisines].join(',')}</p>
            <p>{avgRating} Stars</p>
            <p>{sla.deliveryTime} Min </p>
        </div>
    )
}

// const RestaurentCard= ({ resData }) => {
//   const { cuisines, avgRating, sla, name } = resData?.info || {};
  
//   return (
//     <div className="modern-res-card">
//       <div className="card-image-container">
//         <img 
//           className='modern-res-logo' 
//           src={CDN_URL+resData.info.cloudinaryImageId}
//           alt={name}
//         />
//         <div className="rating-badge">
//           <span className="rating-star">⭐</span>
//           <span className="rating-text">{avgRating}</span>
//         </div>
//       </div>
      
//       <div className="card-content">
//         <h3 className="restaurant-name">{name}</h3>
//         <p className="cuisine-text">{cuisines?.join(', ')}</p>
//         <div className="delivery-info">
//           <span className="delivery-time">🕒 {sla?.deliveryTime} mins</span>
//         </div>
//       </div>
//     </div>
//   );
// };
export default RestaurentCard;

