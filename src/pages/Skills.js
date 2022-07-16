import React from 'react'

const Skills = () => {
  return (
    
  <section id="skills" class="icons bg-light center">
    <h2>My Skills</h2>
    <div class="bottom-line"></div>
    <div class="flex-items-about">
      <div class="skill-column">
        <i class="fas fa-desktop fa-2x"></i>
        <div>
          <h3>FRONTEND</h3>
          <p>
            HTML, CSS, SASS, JavaScript, React, TypeScript,Material UI
          </p>
        </div>
      </div>
      <div class="skill-column">
        <i class="fa fa-server fa-2x"></i>
        <div>
          <h3>BACKEND</h3>
          <p>
            Nodejs, Express, MongoDB, SQL, Firebase
          </p>
        </div>
      </div>
      <div class="skill-column">
        <div><i class="fas fa-file-alt fa-2x"></i>
          <div>
            <h3>OTHERS</h3>
            <p>
              Rest API, GIT, JIRA, Jest, Enzyme, Agile(SCRUM), KANBAN
            </p>
          </div>
        </div>
      </div>
      </div>
  </section>
    
  )
}

export default Skills