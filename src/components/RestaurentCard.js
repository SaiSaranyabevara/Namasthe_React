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

export default RestaurentCard;