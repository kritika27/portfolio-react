import React from 'react'

const Skills = () => {
  return (
    
  <section id="skills" className="icons bg-light center">
    <h2>My Skills</h2>
    <div className="bottom-line"></div>
    <div className="flex-items-about">
      <div className="skill-column">
        <i className="fas fa-desktop fa-2x"></i>
        <div>
          <h3>FRONTEND</h3>
          <p>
            HTML, CSS, SASS, JavaScript, React, TypeScript,Material UI
          </p>
        </div>
      </div>
      <div className="skill-column">
        <i className="fa fa-server fa-2x"></i>
        <div>
          <h3>BACKEND</h3>
          <p>
            Nodejs, Express, MongoDB, SQL, Firebase
          </p>
        </div>
      </div>
      <div className="skill-column">
        <div><i className="fas fa-file-alt fa-2x"></i>
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