import React from 'react';
import './profile.css';

const Profile = (props) => {
  let user = props.user;
  console.log(user);


  return (
    <div>
      <div className="profile-container">

      <div className='user-photo'>
      <img src={user.picture}
        alt="Profile"
        className="user-photo-img"
      />
      </div>
        <div className="user-name">
          <h2>Name:</h2> 
          <p>{user.name}</p>
        </div>

        <div className="user-username">
          <h2>Username: {user.nickname}</h2>
        </div>

        <div className="user-email">
          <h2>Email: {user.email}</h2>
        </div>

      </div>

      {/* <div className="row">
        <pre className="col-12 text-light bg-dark p-4">
          {JSON.stringify(user, null, 2)}
        </pre>
      </div> */}
    </div>
  );
};

export default Profile;