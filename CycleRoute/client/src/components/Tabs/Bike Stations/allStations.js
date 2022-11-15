import "./bikeStations.css";
import { useState } from 'react';
import BikeStations from './bikeStations';
import cycleRouteLogoSquare from "../../Images/cycleRouteLogoSquare.png";


function AllStations() {
  const [metro, setMetro] = useState(false);
  const [bayWheels, setBayWheels] = useState(false);
  const [breeze, setBreeze] = useState(false);

  //create a sep state to see if its active or not
  //if state is active, then set, if not....
  //do it for each one

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
  //css rule to pass as disable - last night's example
  //or add a state to your component true/false
  //may need to add another parent to this , this could potentially disable the other buttons, and call the info you want and only that info
  //parent component for all the buttons
  //try following a similar format for endpoint for button - to call that particular info

  return (
    <div>
      <div className="display-btns">
        {/* The logical AND (&&) operator returns the value to the right if the value to the left is truthy. */}
        <button className="display-btns" onClick={displayMetro} >Los Angeles Metro Bike Share</button>
        < button className="display-btns" onClick={displayBreeze} > Santa Monica Breeze Bike Share</button>
        <button className="display-btns" onClick={displayBayWheels} >San Francisco Bay Wheels</button>
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
      <div className="allstations-logo">
      <img src={cycleRouteLogoSquare} className='cycleRoute-square' alt='logo'/>
      </div>

    </div >

  )
}

export default AllStations;