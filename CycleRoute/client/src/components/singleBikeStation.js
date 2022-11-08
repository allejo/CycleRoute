import React from 'react'
import { useState } from "react";

const SingleBikeStation = ({ singleBikeStation }) => {
  const [flipPost, setFlipPost] = useState(true);
  //If Image is null in DB, set a default photo
  // const [nullImage, setNullImage] = useState(null);

  //FLIPCARD
  const handleFlipPost = () => {
    setFlipPost(!flipPost)
  }

  return (
    <div className="singleBikeStation">
      {flipPost ? (
        <div className='single-bikestation-card-full'>

          <div className="card-title">
            {singleBikeStation.network.stations[0].name}
          </div>

          <div className="card-adress">
            <p>Address: {singleBikeStation.extra.address}</p>
          </div>

          <div className="card-bikes-available">
            <p>Bikes Available : {singleBikeStation.free_bikes}</p>
          </div>

          <div className="card-docks-available">
            <p>Docks Available: {singleBikeStation.empty_slots}</p>
          </div>

          <div className="card-updated">
            <p>Last Updated: {new Date(singleBikeStation.timestamp).toLocaleString()}</p>
          </div>

          <button className='singleBikeStation-btn' onClick={handleFlipPost}>View More</button>
        </div>
      ) : (
        <div className="single-bikestation-card-full">

          <div className="card-title">
            <h2>Title: {singleBikeStation.name}</h2>
          </div>

          <button className='singleBikeStation-btn' onClick={handleFlipPost}>Back</button>
        </div>
      )}
    </div>
  )
}

export default SingleBikeStation;
