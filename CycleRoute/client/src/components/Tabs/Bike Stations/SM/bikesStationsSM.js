import { useState, useEffect } from 'react';
import SingleBikeStationSM from './singleBikeStationSM';
import "../bikeStations.css";

const BikeStationsSM = () => {
  const [station, setStation] = useState([]);
  //For Search Bar - to filter through stations
  const [allStations, setAllStations] = useState([]);

  const fetchAllPosts = () => {
    console.log('fetchAllPosts')
    fetch("http://api.citybik.es/v2/networks/")
      .then((response) => response.json())
      .then((data) => {
        console.log(data, "Testing from BikeStations fetch request.");
        //by adding setAllStations, it allows us to see all the data returned to the cards for the search bar
        //network.stations needs to be added in order to access the stations KEY information directly. Since Stations Key is an array the info we will get for the useState is [].
        setAllStations(data.network.stations);
        setStation(data.network.stations);
      });
  };
  useEffect(fetchAllPosts, []);

  //FILTER FUNCTION - Search Bar
  const filterStations = event => {
    const value = event.target.value.toLowerCase();
    const filteredAllStations = allStations.filter(
      station => (`${station.name} ${station.extra.address}`
        .toLowerCase()
        .includes(value))
    )
    //setPosts(filteredAllCards) is to  display the cards we want to display at the time
    setStation(filteredAllStations)
  }

  return (
    <div>
      {/* SearchBar */}
      <input className='search-box' placeholder='Search' onInput={filterStations}></input>
      <div className='allstations'>

        {/* By adding  .slice(), it allows you to slice the incoming data, so that you see the first array  issue.
        {station.slice(0,1).map((station, index) */}
        {station.map((station, index) => {
          return (
            <SingleBikeStationSM key={index} singleBikeStationSM={station} />
          )
        }
        )}

      </div>

    </div>
  );
}
export default BikeStationsSM;