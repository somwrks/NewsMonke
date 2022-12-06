import React, { Component } from "react";

export class NewsItem extends Component {
  render() {
    let { title, description, imageurl, newsurl, mode, author, date, source } =
      this.props;

    return (
      <div className="my-3">
        <div
          className={`card text-${mode === "dark" ? "light" : "dark"} bg-${
            mode === "dark" ? "dark" : "light"
          }`}
        >
          <img src={imageurl} className="card-img-top" alt="..." height={300} />{" "}
          <span
            className="position-aboslute top-0 top-0 translate middle badge rounder-pill
             bg-danger"
            style={{
              display: "flex",
              justifyContent: "flex-end",
              position: "absolute",
              right: "0",
            }}
            id="source"
          >
            {source}
          </span>
          <div className="card-body d-flex flex-column">
            <h5 className="card-title">{title}</h5>
            <p className="card-text">{description}...</p>
            <p className="card-text">
              <small className="text-muted">
                By {author === null ? "unknown" : author} on{" "}
                {new Date(date).toUTCString()}
              </small>
            </p>
            <a
              href={newsurl}
              target="_blank"
              rel="noreferrer"
              className="btn btn-sm btn-primary"
            >
              Read more
            </a>
          </div>
        </div>
      </div>
    );
  }
}

export default NewsItem;
