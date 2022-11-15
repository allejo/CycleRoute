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

// creates an endpoint for the route
app.get('/', (req, res) => {
  // res.json('Message from the backend.');
  res.sendFile(path.join(REACT_BUILD_DIR, 'index.html'));
});

// create the get request
// app.get('/users', cors(), async (req, res) => {
//   try {
//     const { rows: users } = await db.query('SELECT * FROM users');
//     res.send(users);
//   } catch (e) {
//     return res.status(400).json({ e });
//   }
// });

// // create the POST request
// app.post('/users', cors(), async (req, res) => {
//   const newUser = {
//     firstname: req.body.firstname,
//     lastname: req.body.lastname,
//   };
//   console.log([newUser.firstname, newUser.lastname]);
//   const result = await db.query(
//     'INSERT INTO users(firstname, lastname) VALUES($1, $2) RETURNING *',
//     [newUser.firstname, newUser.lastname],
//   );
//   console.log(result.rows[0]);
//   res.json(result.rows[0]);
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

// // delete request
// app.delete('/users/:userId', cors(), async (req, res) =>{
//   const userId = req.params.userId;
//   //console.log("From the delete request-url", req.params);
//   await db.query('DELETE FROM users WHERE id=$1', [userId]);
//   res.status(200).end();
// });

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
    console.log(`Thank you for comming back`)
  } else {
    const query = 'INSERT INTO users(firstname, username, email, sub, image) VALUES($1, $2, $3, $4, $5) RETURNING *'
    const values = [newUser.firstname, newUser.username, newUser.email, newUser.sub, newUser.image]
    const result = await db.query(query, values);
    console.log(result);
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on PORT: ${PORT}.`);
});
