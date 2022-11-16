import { useState } from 'react'

function FavButton() {
    // variable to store favorites items
    const [favoritesList, setFavoritesList] = useState([]);

//save info from auth0 (sub)
//create new variable for info trying to save from api
//new variable to hold both USER saved info & API saved info
//post request - body returns info for both users&api


    //function to add route to favorite list
    const addFavorite = route => {
      console.log('Favorite Button Clicked')
      setFavoritesList([...favoritesList, route]);
    };

  //function remove route from favorite list
  //Filters out each route that matches route.id. 
  const deleteFavorite = route => {
    // console.log('NOT Favorite Button Clicked')
    const filteredList = favoritesList.filter(
      item => item.id !== route.id
    );
    setFavoritesList(filteredList);
  };

  //function checks if route exists in favorite list
  const existsFavorite = route => {
    if (favoritesList.filter(item => item.id === route.id).length > 0) {
      return true;
    };
    return false;
  };

  return (
    <div>
      <button onClick={addFavorite}>
      {/* <button onClick={ () => existsFavorite() ? deleteFavorite() : addFavorite()}> */}
        Favorite Route
      </button>
    </div>
  )
}

export default FavButton;
