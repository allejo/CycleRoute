// import React from 'react'
import { useState } from 'react';
import BikeStations from './LA/bikeStations';
import BikeStationsSF from './SF/bikesStationsSF';
import BikeStationsSM from './SM/bikesStationsSM';

function AllStations() {
  const [metro, setMetro] = useState(false);
  const [bayWheels, setBayWheels] = useState(false);
  const [breeze, setBreeze] = useState(false);


  //create a sep state to see if its active or not
  //if state is active, then set, if not....
  //do it for each one
  //place all in a container
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
          <BikeStations bikeEndpoint = "metro-bike-share"/>
        </div>
      )}

< button onClick={handleBreeze}> Santa Monica Breeze Bike Share</button>
      {breeze && (
        <div>
          <BikeStations bikeEndpoint = "breeze-bike-share"/>
        </div>
      )
      }

      <button onClick={handleBayWheels}>San Francisco Bay Wheels</button>
      {bayWheels && (
        <div>
          <BikeStationsSF bikeEndpoint = "bay-wheels"/>
        </div>
      )}

    </div >
  )
}

export default AllStations

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
  
  