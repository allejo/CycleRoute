// import React from 'react'
import { useState } from 'react';
import BikeStations from './LA/bikeStations';
import BikeStationsSF from './SF/bikesStationsSF';
import BikeStationsSM from './SM/bikesStationsSM';

function AllStations() {
  const [metro, setMetro] = useState(false);
  const [bayWheels, setBayWheels] = useState(false);
  const [breeze, setBreeze] = useState(false);

  const handleMetro = () => {
    setMetro(!metro);
  }

  const handleBayWheels = () => {
    setBayWheels(!bayWheels);
  }
  const handleBreeze = () => {
    setBreeze(!breeze);
  }

  return (
    <div>
      {/* The logical AND (&&) operator returns the value to the right if the value to the left is truthy. */}
      <button onClick={handleMetro}>Los Angeles Metro Bike Share</button>
      {metro && (
        <div>
          <BikeStations />
        </div>
      )}

< button onClick={handleBreeze}> Santa Monica Breeze Bike Share</button>
      {breeze && (
        <div>
          <BikeStationsSM />
        </div>
      )
      }

      <button onClick={handleBayWheels}>San Francisco Bay Wheels</button>
      {bayWheels && (
        <div>
          <BikeStationsSF />
        </div>
      )}

    </div >
  )
}

export default AllStations
