import { useState, useEffect } from 'react';
import SingleBikeStation from './singleBikeStation';

const BikeStations = () => {
  const [station, setStation] = useState({});
  //To be able to use Search Bar - to Keep a record of all users & filter
  const [allStations, setAllStations] = useState({});

  const fetchAllPosts = () => {
    console.log('fetchAllPosts')
    fetch("http://api.citybik.es/v2/networks/metro-bike-share")
      .then((response) => response.json())
      .then((singleStation) => {
        console.log(singleStation, "Testing");
        //by adding setAllCards, it allows us to see all the data returned to the cards for the search bar
        setAllStations(singleStation);
        setStation(singleStation);
      });
  };
  useEffect(fetchAllPosts, []);

  {/* around each card that has been mapped, set a state for current card and if current card == post 
  then just print out that one post, move ternary below return()
state that saves id, if id==post.id then print otherwise won't print...state to empty string, 
once you click set to specfic post id(would go with button) */}
  //if console.log(event)browser console will print an object, when you head to target->value you will see what you were typing, here the text is actually stored

  //FILTER FUNCTION - Search Bar
  const filterStations = event => {
    // console.log(event.target.value);
    const value = event.target.value.toLowerCase();
    const filteredAllStations = allStations.filter(
      post => (`${post.author} ${post.title} ${post.post}`
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
        {/* {station.map((station, index) => {
          return (
            <SingleBikeStation key={index} SingleBikeStation={station} />
          )
        }
        )}
         */}
        {Object.keys(station).map((index, station) => (
          <SingleBikeStation key={index} singleBikeStation={station} />
        ))
        }
      </div>

    </div>
  );
}
export default BikeStations;