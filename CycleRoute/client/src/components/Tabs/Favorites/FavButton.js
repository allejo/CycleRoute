import { useState } from 'react'

function FavButton() {
  // variable to store favorites items
  const [favoritesList, setFavoritesList] = useState([]);

  //save info from auth0 (sub)
  //create new variable for info trying to save from api
  //new variable to hold both USER saved info & API saved info
  //post request - body returns info for both users&api


  //function to add route to favorite list
  const addFavorite = route => {
    console.log('Favorite Button Clicked')
    setFavoritesList([...favoritesList, route]);
  };

  //function remove route from favorite list
  //Filters out each route that matches route.id. 
  // const deleteFavorite = route => {
  //   // console.log('NOT Favorite Button Clicked')
  //   const filteredList = favoritesList.filter(
  //     item => item.id !== route.id
  //   );
  //   setFavoritesList(filteredList);
  // };

  // //function checks if route exists in favorite list
  // const existsFavorite = route => {
  //   if (favoritesList.filter(item => item.id === route.id).length > 0) {
  //     return true;
  //   };
  //   return false;
  // };

  return (
    <div>
      <button onClick={addFavorite}>
        {/* <button onClick={ () => existsFavorite() ? deleteFavorite() : addFavorite()}> */}
        Favorite Route
      </button>
    </div>
  )
}

export default FavButton;

//originPLacce, destinationPlace passing in as props 
// const ToggleFavorite = ({ selectedPark }) => {
//   // console.log(selectedPark.parkCode, "selected Park to Toggle")
//   const [fav, setFav] = useState([])
//   const [isSaved, setIsSaved] = useState()
//   //for which user are you getting the favs for
//   const { loginWithRedirect, user } = useAuth0();

//   //fetches data for specific users.
//   useEffect(() => {
//     const displayFav = async () => {
//       await fetch(`/favorites/${user.sub}`, {
//       })
//         .then(response => response.json())
//         .then(data => {
//           setFav(data);
//         })
//     }
//     displayFav()
//   }, []);

//   //checks if data is in favorites list an uses if/else to do post(add) or delete request
//   const handleClick = async () => {
//     // console.log(user.sub, "check user Details")
//     if (!fav.find(item => item.park_code == selectedPark.parkCode)) {

//       await fetch(`/favorites`, {
//         method: "POST",
//         headers: { "Content-Type": "application/json" },
//         body: JSON.stringify({ "park": selectedPark.parkCode, "user": user.sub })
//       }
//       )
//         .then(response => response.json())
//         .then(data => {
//           setFav([...fav, data])
//           setIsSaved(true)
//         })
//     } else {
//       await fetch(`/favorites/${user.sub}/${selectedPark.parkCode}`, {
//         method: "DELETE",
//       })
//         .then(response => response.json())
//         .then(data => {
//           // console.log(fav.filter(item=> item.park_code != selectedPark.parkCode), "delete request")
//           setFav([fav.filter(item => item.park_code != selectedPark.parkCode)])
//           setIsSaved(false)
//         })
//     }

//   }

//   // console.log(fav, "info after request")
//   return (
//     <div>
//       {/* loginwithredirect It leads user to login to add as favorite */}
//       <button data-testId="buttonFav" onClick={() => handleClick()}>{user ? (!fav.find(item => item.park_code == selectedPark.parkCode) ? <i className="fa-regular fa-heart"></i> : <i className="fa-solid fa-heart"></i>) : <i className="fa-regular fa-heart">onClick={() => loginWithRedirect()}</i>}
//       </button>


//     </div>
//   )
// }

