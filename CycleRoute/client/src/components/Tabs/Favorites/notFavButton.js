import React from 'react';

function NotFavButton({ id, deleteFavorite }) {

  return (
    <div>
      <button onClick={() => deleteFavorite(id)} >
        Remove Favorite
      </button>
    </div>
  )
}

export default NotFavButton;
