import React, { Component } from "react";

export default class Alert extends Component {
    
  render() {
    return (
      <div style={{ height: "10px", marginTop: "50px" }}>
        <div
          className="alert alert-primary alert-dismissible fade show"
          role="alert"
        >
          Thanks{" "}
          <a
            href="https://newsapi.org/"
            target="_blank"
            rel="noreferrer"
            className="alert-link text-primary"
            style={{textDecoration:"none"}}
          >
            NewsApi
          </a>{" "}
          for making this website possible.
          <button
            type="button" 
            className="close"
            data-dismiss="alert"
            aria-label="Close"
          >
            <span aria-hidden="true">&times;</span>
          </button>
        </div>
      </div>
    );
  }
}
