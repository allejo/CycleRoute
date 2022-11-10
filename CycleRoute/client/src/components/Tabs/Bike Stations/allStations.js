import "./bikeStations.css";
import BikeStations from './bikeStations';
import { useState } from 'react';

function AllStations() {
  const [metro, setMetro] = useState(false);
  const [bayWheels, setBayWheels] = useState(false);
  const [breeze, setBreeze] = useState(false);


  //create a sep state to see if its active or not
  //if state is active, then set, if not....
  //do it for each one
  //place all in a container

  //Los Angeles Metro Bike Share
  const displayMetro = () => {
    setMetro(!metro);
  }
  //San Francisco Bay Wheels
  const displayBayWheels = () => {
    setBayWheels(!bayWheels);
  }
  //Santa Monica Breeze Bike Share
  const displayBreeze = () => {
    setBreeze(!breeze);
  }

  return (
    <div>
      <div>
        {/* The logical AND (&&) operator returns the value to the right if the value to the left is truthy. */}
        <button onClick={displayMetro}>Los Angeles Metro Bike Share</button>
        < button onClick={displayBreeze}> Santa Monica Breeze Bike Share</button>
        <button onClick={displayBayWheels}>San Francisco Bay Wheels</button>
      </div>
      
      <div>
        {metro && (
          <div>
            <BikeStations apiEndpoint="metro-bike-share" />
          </div>
        )}

        {breeze && (
          <div>
            <BikeStations apiEndpoint="breeze-bike-share" />
          </div>
        )
        }

        {bayWheels && (
          <div>
            <BikeStations apiEndpoint="bay-wheels" />
          </div>
        )}
      </div>

    </div >
  )
}

export default AllStations;