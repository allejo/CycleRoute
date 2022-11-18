import React, { useState } from 'react';
import NotFavButton from './notFavButton';


function FavoriteCard({ oneFavCard, id, deleteFavorite }) {
  const [dropDown, setDropDown] = useState(true);

  const handleDropDown = () => {
    setDropDown(!dropDown);
  };

  return (
    <div className='allFavCards'>
      {dropDown ? (
        <div className='oneFavCard-card'>

          <div className='favcard-route' onClick={handleDropDown}>
            <h1>{oneFavCard.start_location} <span className='arrow'>&#x2192;</span> {oneFavCard.end_location}</h1>
          </div>

        </div>
      ) : (
        <div className='oneFavCard-card'>

          <div className='favcard-route' onClick={handleDropDown}>
            <h1>{oneFavCard.start_location} <span className='arrow'>&#x2192;</span> {oneFavCard.end_location}</h1>
          </div>
          <div className='favcard-results'>
            <h2>Distance: <span className='favcard-results-span'>{oneFavCard.distance}</span></h2>
            <h2>Duration: <span className='favcard-results-span'>{oneFavCard.duration}</span></h2>
          </div>
          <NotFavButton id={id} deleteFavorite={deleteFavorite} />
        </div>
      )}

    </div>
  )
}

export default FavoriteCard
