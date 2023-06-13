function FavButton({ originAutocompleteRef, destinationAutocompleteRef, user, distance, duration }) {

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
        "end_long": destinationAutocompleteRef.current.gm_accessors_.place.ij.place.geometry.location.lng(),
        "distance": distance,
        "duration": duration
      })
    });

    console.log('Route Added to Favorites List')
  };

  return (
    <div>
      <button onClick={addFavorite}>
        Add Route
      </button>
    </div>
  )
}

export default FavButton;
/**************** NOTES *************************/
/*
FavButton is tasked with ONLY adding API data into the database Favorites table. 
No need for a useState as the favorites list(adding, deleting, confirming favorite exists) will handle it.
To access API data, client-side go to body:JSON.stringify(). For every field you expect to send to server as part 
of the body, you need to declare it client-side. Client-side is where you would get the specific(nested) data. 
Then the server-side can be called as normal.
*/