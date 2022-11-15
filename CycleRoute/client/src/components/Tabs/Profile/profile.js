import React from 'react';
import './profile.css';

const Profile = (props) => {
  let user = props.user;
  console.log(user);
  console.log("Picture", user.picture)

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
          <p><strong>Name: </strong>{user.name}</p>
        </div>

        <div className="user-username">
          <p><strong>Username: </strong>{user.nickname}</p>
        </div>

        <div className="user-email">
          <p><strong>Email: </strong>{user.email}</p>
        </div>

      </div>
      <div>
        <button>Edit</button>
        <button >Delete</button>

      </div>
      <div className="row">
        <pre className="col-12 text-light bg-dark p-4">
          {JSON.stringify(user, null, 2)}
        </pre>
      </div>
    </div>
  );
};

export default Profile;