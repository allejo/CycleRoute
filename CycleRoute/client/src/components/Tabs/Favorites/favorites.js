import { useState, useEffect } from 'react';
import FavoriteCard from './favCard';
import './favorites.css';

const Favorites = (props) => {
  const user = props.user;
  console.log(user);
  //variable to store favorites items
  const [favoritesList, setFavoritesList] = useState([]);

  // //function to add route to favorite list
  // const addFavorite = route => {
  //   setFavoritesList([...favoritesList, route]);
  // };

  // //function remove route from favorite list
  // //Filters out each route that matches route.id. 
  // const deleteFavorite = route => {
  //   const filteredList = favoritesList.filter(
  //     element => element.id !== route.id
  //   );
  //   setFavoritesList(filteredList);
  // };

  // //function checks if route exists in favorite list
  // const existsFavorite = route => {
  //   if (favoritesList.filter(element => element.id === route.id).length > 0) {
  //     return true;
  //   };
  //   return false;
  // };

  //fetches data for specific users.
  useEffect(() => {
    fetch(`/favorites/${user.sub}`)
      .then(response => response.json())
      .then(data => {
        setFavoritesList(data);
        console.log(data)
      })
  },
    []);

  return (
    <div className="favorites-component">
      {/* <button className={existsFavorite(element) ? 'Favorite' : 'Not Favorite'}>
  Favorite
</button> */}

      <div className='favoriteslist'>
        {favoritesList.map((favorite, index) => {
          return (
            <FavoriteCard key={index} oneFavCard={favorite} />
          )
        })}
      </div>

    </div>
  )
};
export default Favorites;
