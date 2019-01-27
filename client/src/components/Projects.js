import React from 'react'

const Projects = () => {
  return (
    <>
      <h2>Projects</h2>
      
      <table>
        <tr>
          <th>Booths</th>
          <th>Cyanic Travel</th>
        </tr>
        <tr>
          {/* Booths */}
          <img/> 
          <td>https://w18-table-app.herokuapp.com/</td>

          {/* Cyanic Travel */}
          <img/>
          <td>https://github.com/coltennial/Cyanic_Travel</td>
        </tr>
        <tr>
          <td>Booths is an app that allows people to reserve tables at venues with ease. It was created with a team of web developers,we each assisted with backend data, front end functionality, and design.</td>
          <td>Cyanic Travel is a faux travel website where you can search and book a location for vacation. The front end ReactJS side was built in three different architectures using Pure React, React Context Api, and Redux. </td>
        </tr>
      </table>
    </>
  )
}

export default Projects
