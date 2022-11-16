import BikeStationsCard from './bikeStationsCard';
import { useState, useEffect } from 'react';
import { slice } from "lodash";

const BikeStations = ({ apiEndpoint }) => {
  const [stations, setStations] = useState([]);
  const [searchStations, setSearchStations] = useState([]);

  const [isCompleted, setIsCompleted] = useState(false);
  const [index, setIndex] = useState(12);
  const initialStations = slice(stations, 0, index);


  const fetchStationsData = () => {
    fetch(`http://api.citybik.es/v2/networks/${apiEndpoint}`)
      .then((response) => response.json())
      .then((data) => {
        console.log(data, "Testing from bikeStations fetch request.");
        //by adding setAllStations, it allows us to see all the data returned to the cards for the search bar
        //network.stations needs to be added in order to access the stations KEY information directly. Since Stations Key is an array the info we will get for the useState is [].
        setSearchStations(data.network.stations);
        setStations(data.network.stations);
      });
  };

  const loadMore = () => {
    setIndex(index + 4);
    console.log(index);
    if (index >= stations.length) {
      setIsCompleted(true);
    } else {
      setIsCompleted(false);
    }
  };

  useEffect(fetchStationsData, []);

  //FILTER FUNCTION - Search Bar
  const filterStations = event => {
    const value = event.target.value.toLowerCase();
    const filteredStations = searchStations.filter(
      station => (`${station.name} ${station.extra.address}`
        .toLowerCase()
        .includes(value))
    )
    //setStations(filteredAllCards) is to  display the cards we want to display at the time
    setStations(filteredStations)
  }

  return (
    <div>
      {/* SearchBar */}
      <input className='search-box' placeholder='Search' onInput={filterStations}></input>
      <div className='allstations'>

        {/* By adding  .slice(), it allows you to slice the incoming data, so that you see the first array  issue.
        {station.slice(0,1).map((station, index) */}
        {initialStations.map((station, index) => {
          return (
            <BikeStationsCard key={index} singleCard={station} />
          )
        }
        )}

      </div>

      <div>
        {isCompleted ? (
          <button onClick={loadMore} type="button">
            That's It
          </button>
        ) : (
          <button onClick={loadMore} type="button">
            View More...
          </button>
        )}
      </div>

    </div>
  );
}
export default BikeStations;