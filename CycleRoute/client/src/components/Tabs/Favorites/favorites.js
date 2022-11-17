import { useState, useEffect } from 'react';
import { useAuth0 } from '@auth0/auth0-react';


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

    // console.log('35', user)
    // const displayFavorites = async() => {
    //   console.log('37', user)
    //   await fetch(`/favorites/${user.sub}`)
    //     .then(response => response.json())
    //     .then(data => {
    //       setFavoritesList(data);
    //     })
    // }
    // displayFavorites()
  }, []);

  return (
    <div className="favorites-component">
      <h1>This is the Favorites page.</h1>
      {/* <button className={existsFavorite(element) ? 'Favorite' : 'Not Favorite'}>
  Favorite
</button> */}
    </div>
  )
};
export default Favorites;
