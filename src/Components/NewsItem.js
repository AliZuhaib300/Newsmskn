import React, { Component } from "react";
import { Link } from "react-router-dom";

export class NewsItem extends Component {
  render() {
    let { title, description, imageUrl, newsUrl, author, date, source} = this.props;
    return (
      <div className="my-3">
        <div className="card">
        <span className="position-absolute top-0 translate-middle badge rounded-pill bg-danger" style={{left: '90%', zIndex: '1'}}>{source}</span>
          <img
            src={
              !imageUrl
                ? "https://static.tnn.in/thumb/msid-91794593,imgsize-100,width-1280,height-720,resizemode-75/91794593.jpg"
                : imageUrl
            }
            className="card-img-top"
            alt="..."
          />
          <div className="card-body">
            <h5 className="card-title">{title } </h5>
            <p className="card-text">{description}</p>
            <p className="card-text"><small className="text-muted">By {!author?"Unknow": author} on {new Date(date).toGMTString()}</small></p>
            <Link
              rel="noreferrer"
              to={newsUrl}
              target="_blank"
              className="btn btn-sm btn-dark"
            >
              Read More
            </Link>
          </div>
        </div>
      </div>
    );
  }
}

export default NewsItem;
