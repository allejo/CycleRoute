import React, { useState, useEffect } from 'react';
import NotFavButton from './notFavButton';


function FavoriteCard({ oneFavCard, id, deleteFavorite }) {
  const [dropDown, setDropDown] = useState(true);
  const [notes, setNotes] = useState('');
  const [editNotes, setEditNotes] = useState(true);

  //This useEffect is passing the information from favorite.js with prop oneFavCard
  //If dependecy array(2nd parameter []) has changed since the last render, will the effect be rerun if it changes.
  //Didn't set notes in here because it is a state variable, if notes were in the dependecy array it would trigger a rerun, resulting in an infinite loop.
  useEffect(() => {
    setNotes(oneFavCard.notes);
  }, [oneFavCard.notes]);

  const editFavorite = async () => {
    await fetch(`/favorites/${id}`, {
      method: 'PUT',
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ notes })
    });
    // onEditFavorite()
    console.log('Notes Edited on Favorites List')
    window.location.reload(false);
  };

  const handleDropDown = () => {
    setDropDown(!dropDown);
  };

  const toggleEditNotes = () => {
    setEditNotes(!editNotes);
  };


  return (
    <div className='allFavCards'>
      {dropDown ? (
        <div className='oneFavCard-card'>

          <div className='favcard-route' onClick={handleDropDown} >
            <h1>{oneFavCard.start_location} <span className='arrow'>&#x2192;</span> {oneFavCard.end_location}</h1>
          </div>

        </div>
      ) : (
        <div className='oneFavCard-card'>

          <div className='favcard-route' onClick={handleDropDown}>
            <h1>{oneFavCard.start_location} <span className='arrow'>&#x2192;</span> {oneFavCard.end_location}</h1>
          </div>
          <div className='favcard-results'>
            <h2>Distance: <span className='favcard-results-span'>{oneFavCard.distance}</span></h2>
            <h2>Duration: <span className='favcard-results-span'>{oneFavCard.duration}</span></h2>
          </div>
          {editNotes ?
            (<div className='notes-section'>
              <h2 >Notes: <span className='favcard-results-span'>{oneFavCard.notes}</span></h2>
              <br/>
              <button onClick={toggleEditNotes}>Edit Notes</button>
            </div>
            ) : (

              <div>

                <textarea
                  className='notes-textarea'
                  type="text"
                  id="add-notes"
                  placeholder="Add your notes here..."
                  value={notes}
                  onChange={(e) => setNotes(e.currentTarget.value)}
                />
                <br />
                <button onClick={editFavorite}>Update Notes</button>
                <button onClick={toggleEditNotes}>Close Notes</button>
              </div>
            )}
            < NotFavButton id={id} deleteFavorite={deleteFavorite} />
        </div>
      )}

    </div>
  )
}

export default FavoriteCard
