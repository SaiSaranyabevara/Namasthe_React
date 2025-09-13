
//  const Shimmer = () =>{
//     return (
    
//     <div className="shimmer-container">
//         <div className="shimmer-cards"></div>
//         <div className="shimmer-cards"> </div>
//         <div className="shimmer-cards"> </div>
//         <div className="shimmer-cards"></div>
//         <div className="shimmer-cards"> </div>
//         <div className="shimmer-cards">     </div>
//         <div className="shimmer-cards"> </div>
//         <div className="shimmer-cards">  </div>
//         <div className="shimmer-cards">   </div>
//         <div className="shimmer-cards">   </div>
//         <div className="shimmer-cards">   </div>
//         <div className="shimmer-cards">  </div>
//         <div className="shimmer-cards"> </div>
//         <div className="shimmer-cards"> </div>
//         <div className="shimmer-cards">    </div>
            
     
    
//     </div>
//     )
//  }
const Shimmer = () => {
  return (
    <div className="modern-shimmer-container">
      <div className="shimmer-header">
        <div className="shimmer-bar shimmer-title"></div>
        <div className="shimmer-bar shimmer-subtitle"></div>
      </div>
      <div className="shimmer-menu">
        {[1, 2, 3, 4].map((i) => (
          <div key={i} className="shimmer-menu-item">
            <div className="shimmer-item-content">
              <div className="shimmer-bar shimmer-item-name"></div>
              <div className="shimmer-bar shimmer-item-desc"></div>
              <div className="shimmer-bar shimmer-item-price"></div>
            </div>
            <div className="shimmer-bar shimmer-item-image"></div>
          </div>
        ))}
      </div>
    </div>
  );
};
 export default Shimmer;