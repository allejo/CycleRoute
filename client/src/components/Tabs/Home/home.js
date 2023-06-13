import "./home.css";
import React, { useRef, useState } from 'react';
import { useJsApiLoader, Autocomplete } from '@react-google-maps/api';
import Map from "../../map";
import FavButton from "../Favorites/FavButton";
import { useAuth0 } from '@auth0/auth0-react';



const Home = () => {
  const { user } = useAuth0();
  const [map, setMap] = useState( /** @type google.maps.Map */(null));
  //To Display Bike Route Distance & Duration (Directions API)
  const [distance, setDistance] = useState('');
  const [duration, setDuration] = useState('');
  //For DirectionsService: Takes Start & End Locations
  const [originPlace, setOriginPlace] = useState(null)
  const [destinationPlace, setDestinationPlace] = useState(null)

  //Autocomplete (as per documentation) - for the originPlace/destinationPlace
  //Places API
  const originAutocompleteRef = useRef(null)
  const destinationAutocompleteRef = useRef(null)

  //Required to access Maps API and Places API/Library
  const { isLoaded } = useJsApiLoader({
    googleMapsApiKey: process.env.REACT_APP_API_KEY,
    libraries: ['places'],
  })

  //onClick to Submit Info & Display Route on Map
  //getPlace(): Place interface contains info to locate, identify/describe a place for DirectionsRequest/DistanceMatrixRequest
  //geometry - api library; allows us to access the latlng
  //Place means business, point of interest, or geographic location
  //origin/destinationPlace is taking in the value input in the search bars.
  // ?. - chaining operator, checks if value is null/undefined
  const calculateRoute = (e) => {
    e.preventDefault()
    setOriginPlace(originAutocompleteRef.current?.getPlace()?.geometry?.location)
    setDestinationPlace(destinationAutocompleteRef.current?.getPlace()?.geometry?.location)
  }

  //Default Location for Map: Los Angeles, CA
  const center = {
    lat: 34.052235,
    lng: -118.243683
  };

  // console.log(originAutocompleteRef)
  // console.log(destinationAutocompleteRef)

  //CATCH
  if (!isLoaded) {
    return <div>Loading...</div>
  } else {
    return (
      <div className="home">
        {!user ? null :
          <div className="home-username">
            <h1>Welcome {user.nickname.toUpperCase()}</h1>
          </div>
        }
        <div className="auto-map-container">

          <div className="autocomplete-container">

            <form>
              <Autocomplete
                onLoad={(autocomplete) => { originAutocompleteRef.current = autocomplete }}
              >
                <input
                  className='autocomplete-input'
                  placeholder='Start Location'
                  type='text'
                />
              </Autocomplete>

              <Autocomplete
                onLoad={(autocomplete) => { destinationAutocompleteRef.current = autocomplete }}
              >
                <input
                  className='autocomplete-input'
                  placeholder='End Location'
                  type='text'
                />
              </Autocomplete>
              
              {/********************************* BUTTONS *********************************/}
              <button className="search-bar-btn" onClick={calculateRoute} type='submit' >Map My Route</button>
              <button className="search-bar-btn" onClick={() => map.panTo(center)}>Reset</button>
            </form>
            <div className="distance-duration-finaldisplay">
              <h2>Distance: {distance}</h2>
              <h2>Duration: {duration}</h2>
            </div>
          </div>

          <div>
            <Map
              originPlace={originPlace}
              destinationPlace={destinationPlace}
              onMapLoad={setMap}
              onDurationChange={setDuration}
              onDistanceChange={setDistance}
              center={center} />
          </div>
          {!user ? null :
            <div>
              <FavButton
                originAutocompleteRef={originAutocompleteRef}
                destinationAutocompleteRef={destinationAutocompleteRef}
                distance={distance}
                duration={duration}
                user={user} />
            </div>
          }
        </div>
      </div>
    )
  }
};
export default Home;