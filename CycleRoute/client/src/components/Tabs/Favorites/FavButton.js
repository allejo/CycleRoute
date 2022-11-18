import { useState } from 'react'

function FavButton({ originAutocompleteRef, destinationAutocompleteRef, user }) {

  //function to add route to favorite list

  const addFavorite = async () => {
    await fetch(`/favorites`, {
      method: 'POST',
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        "sub": user.sub,
        "start_location": originAutocompleteRef.current.gm_accessors_.place.ij.place.name,
        "end_location": destinationAutocompleteRef.current.gm_accessors_.place.ij.place.name,
        "start_lat": originAutocompleteRef.current.gm_accessors_.place.ij.place.geometry.location.lat(),
        "start_long": originAutocompleteRef.current.gm_accessors_.place.ij.place.geometry.location.lng(),
        "end_lat": destinationAutocompleteRef.current.gm_accessors_.place.ij.place.geometry.location.lat(),
        "end_long": destinationAutocompleteRef.current.gm_accessors_.place.ij.place.geometry.location.lng()
      })
    });
    console.log('Favorite Button Clicked')
  };

  // //function remove route from favorite list
  // //Filters out each route that matches routbe.id. 
  // const deleteFavorite = route => {
  //   // console.log('NOT Favorite Button Clicked')
  //   const filteredList = favorites.filter(
  //     item => item.id !== route.id
  //   );
  //   setFavorites(filteredList);
  // };

  // // //function checks if route exists in favorite list
  // const existsFavorite = route => {
  //   if (favorites.filter(item => item.id === route.id).length > 0) {
  //     return true;
  //   };
  //   return false;
  // };

  return (
    <div>
      <button onClick={addFavorite}>
        Favorite Route
      </button>
    </div>
  )
}

export default FavButton;

//originPLacce, destinationPlace passing in as props 
// const ToggleFavorite = ({ selectedPark }) => {
//   const [fav, setFav] = useState([])
//   const [isSaved, setIsSaved] = useState()

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

