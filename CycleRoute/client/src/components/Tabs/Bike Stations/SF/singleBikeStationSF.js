import React from 'react'
import { useState } from "react";

const SingleBikeStationSF = ({ singleBikeStationSF }) => {
  const [flipCard, setFlipCard] = useState(false);
  //If Image is null in DB, set a default photo
  // const [nullImage, setNullImage] = useState(null);

  //FLIPCARD
  const handleFlipCard = () => {
    setFlipCard(!flipCard)
  }
  return (
        <div className="singleBikeStation">
          {flipCard ? (
            <div className='single-bikestation-card-full' onClick={handleFlipCard}>
    
              <div className="card-title">
                {singleBikeStationSF.name}
              </div>

              <div className="card-adress">
                <p>Address: {singleBikeStationSF.extra.address}</p>
              </div>

              <div className="card-bikes-available">
                <p>Bikes Available : {singleBikeStationSF.free_bikes}</p>
              </div>

              <div className="card-docks-available">
                <p>Docks Available: {singleBikeStationSF.empty_slots}</p>
              </div>
    
              <div className="card-updated">
                <p>Last Updated: {new Date(singleBikeStationSF.timestamp).toLocaleString()}</p>
              </div>

            </div>
          ) : (
            <div className="single-bikestation-card-full" onClick={handleFlipCard}>

              <div className="card-title">
                <h2>Title: {singleBikeStationSF.name}</h2>
              </div>

            </div>
          )}
        </div>

  )
}

export default SingleBikeStationSF;
