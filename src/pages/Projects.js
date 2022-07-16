import React from 'react'

const Projects = () => {
  return (
  <section id="work" className="flex-items cases">
    <h2>My Projects</h2>
    <div className="bottom-line"></div>
    <div className="items">
      <div className="item">
        <div className="item-image">
          <img
            src="https://raw.githubusercontent.com/kritika27/ecommerce-store-reactjs-stripe-oauth2/main/public/images/Capture.JPG"
            alt="ecommerce" />
        </div>
        <div className="item-text">
          <div className="item-text-wrap">
            <h2 className="item-text-title">Ecommerce Website</h2>
            <a href="https://github.com/kritika27/ecommerce-store-reactjs-stripe-oauth2" target="_blank"> <button
                className="b project" rel="noopener noreferrer">Github</button></a>
            <a href="https://competent-engelbart-3915c0.netlify.app/" rel="noopener noreferrer" target="_blank"><button className="b project">Live
                Project</button></a>
          </div>
        </div>
      </div>
      <div className="item">
        <div className="item-image">
          <img src="https://raw.githubusercontent.com/kritika27/portfolio/main/img/portfolio.JPG" alt="portfolio" />
        </div>
        <div className="item-text">
          <div className="item-text-wrap">
            <h2 className="item-text-title">Portfolio</h2>
            <a href="https://github.com/kritika27/portfolio" rel="noopener noreferrer" target="_blank"><button
                className="b project">Github</button></a>
            <a href="https://kritika27.github.io/portfolio/" rel="noopener noreferrer" target="_blank"><button className="b project">Live
                Project</button></a>
          </div>
        </div>
      </div>
      <div className="item">
        <div className="item-image">
          <img src="./img/fitkit_home.JPG" alt="restaurant" />
        </div>
        <div className="item-text">
          <div className="item-text-wrap">
            <h2 className="item-text-title">MERN Fitness Tracker</h2>
            <a href="https://github.com/kritika27/fitness-tracker-mern-stack-app" rel="noopener noreferrer" target="_blank"> <button
                className=" b project">Github</button></a>
            <a href="https://serene-volhard-1843cb.netlify.app/" rel="noopener noreferrer" target="_blank"><button className=" b project">Live
                Project</button></a>
          </div>
        </div>
      </div>
      <div className="item">
        <div className="item-image">
          <img
            src="https://raw.githubusercontent.com/kritika27/furniture-website-react-firebase/main/public/images/home.JPG"
            alt="portfolio" />
        </div>
        <div className="item-text">
        <h2 className="item-text-title">Furniture Website</h2>
            <a href="https://github.com/kritika27/furniture-website-react-firebase" rel="noopener noreferrer" target="_blank"><button
                className="b project">Github</button></a>
            <a href="https://inspiring-rosalind-d587a9.netlify.app/" rel="noopener noreferrer" target="_blank"><button className="b project">Live
                Project</button></a>
          </div>
        </div>
      <div className="item">
        <div className="item-image">
          <img
            src="https://raw.githubusercontent.com/kritika27/recipe-reactjs-api-firebase/main/public/images/Capture.JPG"
            alt="portfolio" />
        </div>
        <div className="item-text">
          <div className="item-text-wrap">
            <h2 className="item-text-title">Recipe App</h2>
            <a href="https://github.com/kritika27/recipe-reactjs-api-firebase" target="_blank"> <button
                className="b project">Github</button></a>
            <a href="https://hopeful-elion-e7c915.netlify.app/"  target="_blank" rel="noopener noreferrer"><button className="b project">Live
                Project</button></a>
          </div>
        </div>
      </div>
      <div className="item">
        <div className="item-image">
          <img
            src="https://raw.githubusercontent.com/kritika27/restaurant-website/main/image_resources/home/Capture.JPG"
            alt="restaurant" />
        </div>
        <div className="item-text">
          <div className="item-text-wrap">
            <h2 className="item-text-title">Restaurant Website</h2>
            <a href="https://github.com/kritika27/restaurant-website" target="_blank"><button
                className=" b project" rel="noopener noreferrer">Github</button></a>
            <a href="https://vigorous-beaver-01def2.netlify.app/" target="_blank" rel="noopener noreferrer"> <button className=" b project">Live
                Project</button></a>
          </div>
        </div>
      </div> 
    </div>
    </section>
  )
}

export default Projects