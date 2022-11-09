import { useState } from "react";

const BikeStationsCard = ({ singleCard }) => {
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
            {singleCard.name}
          </div>

          <div className="card-adress">
            <p>Address: {singleCard.extra.address}</p>
          </div>

          <div className="card-bikes-available">
            <p>Bikes Available : {singleCard.free_bikes}</p>
          </div>

          <div className="card-docks-available">
            <p>Docks Available: {singleCard.empty_slots}</p>
          </div>

          <div className="card-updated">
            <p>Last Updated: {new Date(singleCard.timestamp).toLocaleString()}</p>
          </div>

        </div>
      ) : (
        <div className="single-bikestation-card-full" onClick={handleFlipCard}>

          <div className="card-title">
            <h2>Title: {singleCard.name}</h2>
          </div>

        </div>
      )}
    </div>

  )
}

export default BikeStationsCard;
