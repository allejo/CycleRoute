const express = require('express');
const cors = require('cors');
require('dotenv').config();
const db = require('./db/db-connection.js');
const path = require('path');

const app = express();
const REACT_BUILD_DIR = path.join(__dirname, '..', 'client', 'build');

const PORT = process.env.PORT || 8018;
app.use(cors());
app.use(express.json());
app.use(express.static(REACT_BUILD_DIR));

/*********************** GET REQUEST ***************************************/
// creates an endpoint for the route
app.get('/', (req, res) => {
  // res.json('Message from the backend.');
  res.sendFile(path.join(REACT_BUILD_DIR, 'index.html'));
});

// create the get request
//Gets all the Favorites Routes in table related to the User.
app.get('/favorites/:sub', cors(), async (req, res) => {
  const sub = req.params.sub;
  console.log(`GET request from Favorites Table(server) for userID: ${sub}.`)
  try {
    // const { rows: favorites } = await db.query('SELECT * FROM favorites');
    const { rows: favorites } = await db.query('SELECT * FROM favorites WHERE sub = $1', [sub]);
    res.send(favorites);
  } catch (e) {
    console.error(e)
    return res.status(400).json({ e });
  }
});

/*********************** POST REQUEST ***************************************/
//POST - USERS LOGGED IN
app.post('/users', cors(), async (req, res) => {
  const newUser = {
    firstname: req.body.name,
    username: req.body.nickname,
    email: req.body.email,
    sub: req.body.sub,
    image: req.body.picture
  }
  console.log(newUser);

  //Checks if the email exists in users table, if it does look for it & don't duplicate; if it doesn't exist insert to users table.
  const queryEmail = 'SELECT * FROM users WHERE email=$1 LIMIT 1';
  const valuesEmail = [newUser.email]
  const resultsEmail = await db.query(queryEmail, valuesEmail);
  if (resultsEmail.rows.length > 0) {
    console.log(`Thank you for coming back`)
  } else {
    const query = 'INSERT INTO users(firstname, username, email, sub, image) VALUES($1, $2, $3, $4, $5) RETURNING *'
    const values = [newUser.firstname, newUser.username, newUser.email, newUser.sub, newUser.image]
    const result = await db.query(query, values);
    console.log(result);
  }
});

// create the POST request
//may need change to router.post
app.post('/favorites', cors(), async (req, res) => {
  const newFavRoute = {
    sub: req.body.sub,
    start_location: req.body.start_location,
    end_location: req.body.end_location,
    start_lat: req.body.start_lat,
    start_long: req.body.start_long,
    end_lat: req.body.end_lat,
    end_long: req.body.end_long
  };
  console.log([newFavRoute.sub, newFavRoute.start_location, newFavRoute.end_location, newFavRoute.start_lat, newFavRoute.start_long, newFavRoute.end_lat, newFavRoute.end_long]);

  try {
    const result = await db.query(
      'INSERT INTO favorites(sub, start_location, end_location, start_lat, start_long, end_lat, end_long) VALUES($1, $2, $3, $4, $5, $6, $7) RETURNING *',
      [newFavRoute.sub, newFavRoute.start_location, newFavRoute.end_location, newFavRoute.start_lat, newFavRoute.start_long, newFavRoute.end_lat, newFavRoute.end_long],
    );
    console.log(result.rows[0]);
    res.send(result.rows[0]);
  } catch (e) {
    console.error(e);
    return res.status(400).json({ e });
  }
});

/*********************** DELETE REQUEST ***************************************/
// delete request
//may need change to router.delete
// app.delete('/favorites/:sub/:selectedRoute', cors(), async (req, res) => {
//   const sub = req.params.sub;
//   const selectedRoute = req.query.id;
//   console.log(`DELETE request from Favorites table(server) for sub: ${sub} and selectedRoute: ${selectedRoute}.`);
//   try {
//     await db.query('DELETE FROM favorites WHERE sub = $1 and id = $2', [sub, selectedRoute]);
//     res.send({ status: "success" });
//   } catch (e) {
//     console.error(e);
//     return res.status(400).json({ e });
//   }
// });


// //A put request - Update a student 
// app.put('/users/:userId', cors(), async (req, res) =>{
//   console.log(req.params);
//   //This will be the id that I want to find in the DB - the student to be updated
//   const userId = req.params.userId
//   const updatedUser = { id: req.body.id, firstname: req.body.firstname, lastname: req.body.lastname}
//   console.log("In the server from the url - the user id", userId);
//   console.log("In the server, from the react - the user to be edited", updatedUser);
//   // UPDATE students SET lastname = "something" WHERE id="16";
//   const query = `UPDATE users SET lastname=$1, firstname=$2 WHERE id=${userId} RETURNING *`;
//   const values = [updatedUser.lastname, updatedUser.firstname];
//   try {
//     const updated = await db.query(query, values);
//     console.log(updated.rows[0]);
//     res.send(updated.rows[0]);

//   }catch(e){
//     console.log(e);
//     return res.status(400).json({e})
//   }
// })


app.listen(PORT, () => {
  console.log(`Server is running on PORT: ${PORT}.`);
});
