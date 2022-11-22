import { useState, useEffect } from 'react';
import FavoriteCard from './favCard';
import './favorites.css';
import Map from "../../map";
import { useJsApiLoader} from '@react-google-maps/api';
import {LatLng} from '@googlemaps/js-api-loader'
// import MapRouting from '../Home/mapRouting';

const Favorites = (props) => {
  const user = props.user;
  console.log(user);
  //variable to store favorites items
  const [favoritesList, setFavoritesList] = useState([]);
  const [currentFav, setCurrentFav] = useState(null);

  //fetches data for specific users.
  useEffect(() => {
    fetch(`/favorites/${user.sub}`)
      .then(response => response.json())
      .then(data => {
        setFavoritesList(data);
        console.log(data)
      })
  }, []);

  const deleteFavorite = async (handleDeleteFav) => {
    const response = await fetch(`/favorites/${handleDeleteFav}`, {
      method: 'DELETE',
    });
    await response.json();
    const filteredList = favoritesList.filter((element) => element.id !== handleDeleteFav);
    setFavoritesList(filteredList);
    console.log('Route Deleted from Favorites List')
  };

  //Required to access Maps API and Places API/Library
  const { isLoaded } = useJsApiLoader({
    googleMapsApiKey: process.env.REACT_APP_API_KEY,
    libraries: ['places'],
  })

  const center = {
    lat: 34.052235,
    lng: -118.243683
  };

  //CATCH
  if (!isLoaded) {
    return <div>Loading...</div>
  } else {
    // let startPlace=new google.maps.LatLng(currentFav.start_lat, currentFav.start_long)
    // let endPlace=new google.maps.LatLng(currentFav.end_lat, currentFav.end_long)
    return (
      <div className="favorites-component">

        <div>
          <Map 
          center={center}
          // originPlace={startPlace}
          // destinationPlace={endPlace}
          />
        </div>

        <div className='favoriteslist'>
          {favoritesList.map((favorite, index) => {
            return (
              <FavoriteCard key={index} 
              oneFavCard={favorite} 
              onClick={setCurrentFav}
              id={favorite.id} 
              deleteFavorite={deleteFavorite} 
              />
            )
          })}
        </div>

      </div>
    )
  }
};

export default Favorites;
