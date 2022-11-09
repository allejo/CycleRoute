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
      {/* The logical AND (&&) operator returns the value to the right if the value to the left is truthy. */}
      <button onClick={displayMetro}>Los Angeles Metro Bike Share</button>
      {metro && (
        <div>
          <BikeStations apiEndpoint = "metro-bike-share"/>
        </div>
      )}

< button onClick={displayBreeze}> Santa Monica Breeze Bike Share</button>
      {breeze && (
        <div>
          <BikeStations apiEndpoint = "breeze-bike-share"/>
        </div>
      )
      }

      <button onClick={displayBayWheels}>San Francisco Bay Wheels</button>
      {bayWheels && (
        <div>
          <BikeStations apiEndpoint = "bay-wheels"/>
        </div>
      )}

    </div >
  )
}

export default AllStations;

//pass in as a parameter


//Diana's Code for similar prob I'm running into with 
// const handleAnimeClick = async () => {
//   // do whatever the "get top anime componet does and save it animeList
//   setActiveContent('anime');
//   setLoading(true);
//   const [animeList, err] = await fetchAnime(); // addAnimeToList(animeId);
//   if (animeList) {
//   setAnimeList(animeList);
//   }
//   if (err) {
//   setError(err);
//   }
//   setLoading(false);
//   };
  
//   const makeContainerForContent = () => {
//   if (activeContent === "anime") {
//   return <GetTopAnime animeList={animeList} />
//   }
//   // other cases
//   };
  
  