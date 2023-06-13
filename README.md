# CycleRoute
![](client/src/components/Images/cycleRouteBanner.png)

## Table of Contents
<ul>
<li>Description</li>
<li>Visit CycleRoute</li>
<li>Technologies Used</li>
<li>APIs</li>
<li>Installation</li>
<li>Testing</li>
<li>Future Development</li>
</ul>

---
### Description:
CycleRoute is a full stack web application designed for both cycling enthusiasts and casual cyclists. With CycleRoute, users can easily map the most efficient cycling route to reach their desired destination. Whether you're commuting to work, exploring a new city, or planning a leisurely ride, CycleRoute provides the tools you need to make your cycling experience enjoyable and convenient.

---
### Visit CycleRoute:
To test out this page, please follow the link: https://server-i4nt.onrender.com .
<ul>
<li>Test User: <b>casualCycle@cycle.com</b></li>
<li>Password: <b>Testing532@</b></li>
</ul>

---
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

---
### APIs Used:
- Google APIs:
   - Maps JavaScript
   - Distance Matrix
   - Places
- CityBikes API

---
### Installation:
<strong>Note:</strong>
This web application utilizes [Auth0 credentials](https://auth0.com/) and [Google APIs](https://mapsplatform.google.com/), required to run properly.

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
---
### Testing:
To run tests on terminal, go to client side and run command:
```sh
npm test
```
---
### Future Development:
<ol>
<li><b>Step-By-Step Directions: </b>
Provide users detailed directions, making their journeys even more convenient and straightforward.</li>
<li><b>Render Map and Route on Favorites Tab: </b>
 Implement a feature to display users favorite routes directly on the Favorites tab, allowing for a quick overview of the cycling paths.
</li> 
<li><b>Save & Locate Favorite Bike Stations: </b>
Introduce the capability for users to save and locate their preferred bike stations, providing a personalized experience that allows them to mark and store frequently visited or useful bike stations.
</li>
<li><b>More Robust Unit Tests and Edge Cases: </b>
Enhance application reliability and user experience by implementing comprehensive unit tests covering various scenarios and edge cases, including handling unavailable bike routes and overseas destinations, ensuring seamless functionality and early issue identification for increased stability.
</li>
</ol>

---
### Notes:
<b>Bug with Refreshing Favorites Tab Edits on Hosting Site</b> 
<br/>
Currently, there is a bug that prevents the automatic refresh of notes on the Favorites tab when edited by users on the hosting site. This issue leads to an error in displaying the updated content. To view the latest updates to your notes, please follow these steps:
<br/>
<ol>
<li> Navigate back to the hosting site by clicking the following link: https://server-i4nt.onrender.com.</li>

<li> Return to the Favorites tab on the site.</li>
</ol>
 By following these steps, you will be able to see the most recent changes you made to your notes. We apologize for the inconvenience caused by this bug and appreciate your understanding as we work to resolve it.