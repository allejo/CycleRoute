import { useState } from "react";
import { GoogleMap, BicyclingLayer, MarkerF, DirectionsRenderer, DirectionsService } from "@react-google-maps/api";

//Map Containter Size
const containerStyle = {
  width: '100%',
  height: '550px'
};

const Map = ({ originPlace, destinationPlace, onMapLoad, onDurationChange, onDistanceChange, center }) => {
  //Left side is the local variable used in Map.js. Right side is the props that is being passed from parent.
  // let originPlace = props.originPlace;
  // let destinationPlace = props.destinationPlace;
  // let setMapCallback = props.onMapLoad;
  // let setDurationCallback = props.onDurationChange;
  // let setDistanceCallback = props.onDistanceChange;
  // let center = props.center;

  //For DirectionsRenderer: Displays the Route 
  const [directionsResponse, setDirectionsResponse] = useState(null);

  //directionsCallback: Required as per DirectionsService documentation
  //Directions API
  //https://maps.googleapis.com/maps/api/directions/json?mode=bicycling&origin=Disneyland&destination=Universal+Studios+Hollywood&key=KEY
  //setDistance & setDuration are getting the data from Directions API and returned in a JSON format
  function directionsCallback(response) {
    if (response !== null) {
      if (response.status === 'OK') {
        setDirectionsResponse(response)
        onDistanceChange(response.routes[0].legs[0].distance.text)
        onDurationChange(response.routes[0].legs[0].duration.text)
      } else {
        setDirectionsResponse(null)
      }
    }
  }

  //Bicycling Layer
  const onLoadBicycle = bicyclingLayer => {
    console.log('bicyclingLayer: ', bicyclingLayer)
  }

  return (
    <div className='home-map'>
      <GoogleMap
        mapContainerStyle={containerStyle}
        center={center}
        zoom={12}
        options={{
          backgroundColor: '#ffc400',
          streetViewControl: false,
          fullscreenControl: false,
          mapTypeControl: false,
          mapTypeId: 'terrain'
        }}
        onLoad={onMapLoad}>

        {/*DIRECTIONS SERVICE: Calculates directions, receives directions request, returns EFFICIENT path, travel time optimized.; NEEDED TO WORK WITH DIRECTIONS RENDERER*/}
        {/*Per documentation. Options & callback are required. originPlace & destinationPlace are needed to identify location for directions request. */}
        {
          (originPlace !== null && destinationPlace !== null)
          && (<DirectionsService
            options={{
              destination: destinationPlace,
              origin: originPlace,
              travelMode: 'BICYCLING',
            }}
            callback={directionsCallback}
          >
          </DirectionsService>)
        }

        {/*DIRECTIONS RENDERER: Renders directions obtained from DirectionsService; NEEDED TO WORK WITH DIRECTIONS SERVICE*/}
        {/*Per documentation. Options required.*/}
        {
          (directionsResponse !== null && (
            <DirectionsRenderer
              options={{
                directions: directionsResponse
              }}
            />
          ))
        }

        <BicyclingLayer
          onLoad={onLoadBicycle}
        />
        <MarkerF
          position={center}
        />
      </GoogleMap>
    </div>
  )

}
export default Map;