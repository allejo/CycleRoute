# CycleRoute
![](client/src/components/Images/cycleRouteBanner.png)

## Table of Contents
<ul>
<li>Description</li>
<li>Technologies Used</li>
<li>APIs</li>
<li>Installation</li>
<li>Testing</li>
<li>Future Development</li>
</ul>
<br/>
___________________________________________________________
<br/>

### Description:
CycleRoute is a web application for cyclist enthusiasts and casual cyclists alike. CycleRoute allows users the ability to map the most efficient cycling route to reach their destination. An exciting feature includes local bike station information. 
<br/>

___________________________________________________________

### Technologies Used:
   <table>
  <tr align="center">
    <td align="center"><img src="https://user-images.githubusercontent.com/76704309/202346526-a5ff4025-f329-4869-9bf2-a55c438acce4.png" height="30px"><br>HTML</td>
    <td align="center"><img src="https://user-images.githubusercontent.com/76704309/202346792-38f643ef-1547-437c-be94-934896ffb419.png" height="30px"><br>CSS</td>
    <td align="center"><img src="https://user-images.githubusercontent.com/76704309/202346924-4c884b4b-2ae1-4c99-96e3-5928237c2608.png" height="30px"><br>JavaScript</td>
    <td align="center"><img src="https://user-images.githubusercontent.com/76704309/202349986-4508269e-0ccc-4557-8387-b200fd48eff5.png" height="30px"><br>Express</td>
  </tr>
     <tr align="center">
    <td align="center"><img src="https://user-images.githubusercontent.com/76704309/202350485-fbca3896-cdf0-42b6-bace-5ff4130d0745.png" height="30px"><br>React</td>
    <td align="center"><img src="https://user-images.githubusercontent.com/76704309/202350785-7c97d6ee-cfdd-42d8-bf66-754ebf06609b.png" height="30px"><br>Node JS</td>
        <td align="center"><img src="https://user-images.githubusercontent.com/76704309/202349804-b01c7de8-8a26-477d-87b7-6533268deafe.png" height="30px"><br>postgreSQL</td>
         <td align="center"><img src="https://user-images.githubusercontent.com/76704309/202370441-e6500520-443f-46c0-8062-243cfdf0ee84.png" height="30px"><br>emailJS</td>
  </tr>
</table>
<br/>


___________________________________________________________

### APIs Used:
<ol>
<li>Google Maps JavaScript API</li>
<li>Google Distance Matrix API</li>
<li>Google Places API</li>
<li>CityBikes API</li>
</ol>
x
<br/>
___________________________________________________________

### Installation:
<strong>Note:</strong>
This web application utilizes [Auth0 credentials](https://auth0.com/) () and [Google APIs](https://mapsplatform.google.com/), required to run properly.

1. Clone the repo:
   ```sh
   git clone https://github.com/xocaid/CycleRoute.git
   ```
2. Remove from author's git:
   ```sh
   rm -rf .git
   ```
3. Install all NPM packages using this in the root directory:
   ```sh
   npm install
   ```
4. Copy the root example environment file:
   ```sh
   cp .env.example .env
   ```
5. Restore DB dump file (with password):
   ```sh
   psql -U postgres -f db.sql
   ```
   <strong>OR </strong>
   Restore DB dump file (without password):
      ```sh
   psql -f db.sql
   ```
6. Start the app and view it at <http://localhost:3000> by using:
   ```sh
   npm start
   ```

<br/>
___________________________________________________________

### Testing:
To run tests on terminal, go to client side and run command:
```sh
npm test
```

<br/>
___________________________________________________________

### Future Development:
<ol>
<li>Add Step-By-Step Directions</li>
<li>Add Map and Render Route on Favorites Tab </li>
<li>Save Favorite Bike Stations</li>
</ol>

