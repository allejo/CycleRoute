import { useState, useEffect } from 'react';
import FavoriteCard from './favCard';

import './favorites.css';

const Favorites = (props) => {
  const user = props.user;
  console.log(user);
  //variable to store favorites items
  const [favoritesList, setFavoritesList] = useState([]);

  //fetches data for specific users.
  useEffect(() => {
    fetch(`/favorites/${user.sub}`)
      .then(response => response.json())
      .then(data => {
        setFavoritesList(data);
        console.log(data)
      })
  },[]);

  const deleteFavorite = async (handleDeleteFav) => {
    const response = await fetch(`/favorites/${handleDeleteFav}`, {
      method: 'DELETE',
    });
    await response.json();
    const filteredList = favoritesList.filter((element) => element.id !== handleDeleteFav);
    setFavoritesList(filteredList);
    console.log('Route Deleted from Favorites List')
  };

  return (
    <div className="favorites-component">

      <div className='favoriteslist'>
        {favoritesList.map((favorite, index) => {
          return (
            <div>
            <FavoriteCard key={index} oneFavCard={favorite} />
            <button onClick={() => deleteFavorite(favorite.id)}></button>
            </div>
          )
        })}
      </div>

    </div>
  )
};
export default Favorites;
