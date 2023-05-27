import React, { Component } from 'react'
import { Link } from 'react-router-dom';

export default class NewsItem extends Component {

  render() {
    let { title, descripation, Imagetourl, Newsurl, publishedAt, name } = this.props;
    return (
      <>
        <div className="my-3 container">
          
          <div className="card" style={{ width: 'auto'}}>
          <span className="position-absolute top-0  translate-middle badge rounded-pill bg-success" style={{zIndex:"1", left:"90%", scrollBehavior:"smooth"}}>{name}
          </span>
            <img src={Imagetourl} className="card-img-top" alt="png" style={{maxHeight:"250px"}} />
            <div className="card-body">
              <h5 className="card-title">{title}</h5>
              <p className="card-text">{descripation}</p>
              <p className="card-text">PublishAt    {new Date(publishedAt).toGMTString()}</p>
              
              <Link to={Newsurl} className="btn btn-sm btn-danger px-4" target='_main'>Read More</Link>
            </div>
          </div>
        </div>
      </>
    )
  }
}
