// const Favorites = () => {
//   //variable to store favorites items
//   const [favoritesList, setFavoritesList] = useState([]);

//   //function to add route to favorite list
//   const addFavorite = route => {
//     setFavoritesList([...favoritesList, route]);
//   };

//   //function remove route from favorite list
//   const deleteFavorite = route => {
//     const filteredList = favoritesList.filter(
//       element => element.id !== route.id
//     );
//     setFavoritesList(filteredList);
//   };

//   //function checks if items exists in favorite list
//   const existsFavorite = route => {
//     if (favoritesList.filter(element => element.id === route.id).length > 0) {
//       return true;
//     };
//     return false;
//   };

//   return (a
//     <div className="favorites-component">
//       <h1>This is the Favorites page.</h1>

//     </div>
//   )
// };
// export default Favorites;
