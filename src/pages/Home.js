import React from 'react'
import {Link} from "react-router-dom";

const Home = () => {
  return (
    <>
<main>
      <section className="presentation">
        <div className="introduction">
          <div className="intro-text">
            <h1 className="details">Kritika Srivastava</h1>
            <p>Hi, I am a React Developer.</p>
          </div>
          <div className="cta">
            <Link to="/projects"><button className="home-btn">View My Work</button></Link>

          </div>
        </div>
        <div className="cover">
          <img src="../img/Kritika_Srivastava.jpeg" alt="profile" />
        </div>
      </section>
    </main>    </>
  )
}

export default Home