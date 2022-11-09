import React from 'react'
import { useState } from "react";

const SingleBikeStationSM = ({ singleBikeStationSM }) => {
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
            {singleBikeStationSM.name}
          </div>

          <div className="card-adress">
            <p>Address: {singleBikeStationSM.extra.address}</p>
          </div>

          <div className="card-bikes-available">
            <p>Bikes Available : {singleBikeStationSM.free_bikes}</p>
          </div>

          <div className="card-docks-available">
            <p>Docks Available: {singleBikeStationSM.empty_slots}</p>
          </div>

          <div className="card-updated">
            <p>Last Updated: {new Date(singleBikeStationSM.timestamp).toLocaleString()}</p>
          </div>

        </div>
      ) : (
        <div className="single-bikestation-card-full" onClick={handleFlipCard}>

          <div className="card-title">
            <h2>Title: {singleBikeStationSM.name}</h2>
          </div>

        </div>
      )}
    </div>

  )
}

export default SingleBikeStationSM;
