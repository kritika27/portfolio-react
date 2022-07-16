import React from 'react'

const Blog = () => {
  return (    
  <section id="blog" className="solutions flex-items">
    <div className="row">
      <div className="column">
        <div className="column1">
          <img src="../img/thought-catalog-505eectW54k-unsplash.jpg" alt="Blog post"/>
        </div>
      </div>
      <div className="column">
        <div className="column2">
          <h4>Blog Posts</h4>
          <p><i className="fa fa-pen"></i> <a href="https://dev.to/kritika27/how-to-think-while-building-applications-13eh"
              target="_blank" rel="noopener noreferrer">How to think while building Web Applications.</a></p>
          <p><i className="fa fa-pen"></i> <a
              href="https://dev.to/kritika27/list-of-apis-to-use-for-creating-javascript-react-app-8m4"
              target="_blank" rel="noopener noreferrer">List of APIs to use for creating JavaScript/React App.</a></p>
          <p><i className="fa fa-pen"></i> <a href="https://dev.to/kritika27/react-code-structuring-and-best-practices-3k7p"
              target="_blank" rel="noopener noreferrer">React code structuring and best practices.</a></p>
          <a href="https://dev.to/kritika27" rel="noopener noreferrer" target="_blank"><button className="btn">Read More</button></a>
        </div>
      </div>
    </div>
  </section>  
  )
}

export default Blog