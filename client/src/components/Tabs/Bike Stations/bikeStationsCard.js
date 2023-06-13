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
    <div className="singleBikeStation" style={flipCard ? ({ backgroundColor: '#ffc400', color: '#193232' }) : (null)} onClick={handleFlipCard}>
      {flipCard ? (
        <div className='single-bikestation-card-full' onClick={handleFlipCard}>

          <div className="card-title">
            <h1>{singleCard.name}</h1>
          </div>

          <div className="card-adress">
            <p><strong>Address:</strong> {singleCard.extra.address}</p>
          </div>

          <div className="card-bikes-available">
            <p><strong>Bikes Available : </strong>{singleCard.free_bikes}</p>
          </div>

          <div className="card-docks-available">
            <p><strong>Docks Available: </strong>{singleCard.empty_slots}</p>
          </div>

          <div className="card-updated">
            <p><strong>Last Updated: </strong>{new Date(singleCard.timestamp).toLocaleString()}</p>
          </div>

        </div>
      ) : (
        <div className="single-bikestation-card-full" onClick={handleFlipCard}>

          <div className="card-title">
            <h1>{singleCard.name}</h1>
          </div>

        </div>
      )}
    </div>

  )
}

export default BikeStationsCard;
