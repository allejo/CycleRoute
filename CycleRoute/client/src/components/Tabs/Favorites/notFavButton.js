import React, { useState } from 'react'

function NotFavButton({ deleteFavorite}) {
const [deleteFavId, setDeleteFavId] = useState('');

const handleDeleteFav = (e) => {
  deleteFavorite(deleteFavId);
  setDeleteFavId('');
  console.log('Delete from notFav')
};

  return (
    <div>
      <button onClick={() =>handleDeleteFav()}>
        Remove Favorite
      </button>
    </div>
  )
}

export default NotFavButton;

  // // //function checks if route exists in favorite list
  // const existsFavorite = route => {
  //   if (favorites.filter(item => item.id === route.id).length > 0) {
  //     return true;
  //   };
  //   return false;
  // };

