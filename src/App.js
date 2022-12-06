import "./App.css";
import NavBar from "./components/NavBar";
import News from "./components/News";
import React, { Component } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Alert from "./components/Alert";
import LoadingBar from "react-top-loading-bar";

export default class App extends Component {
  pageSize = 21;
  state = {
    progress: 0,
    mode: "light",
  };
  setProgress = (progress) => {
    this.setState({ progress: progress });
  };
  apiKey = process.env.REACT_APP_NEWS_API;
  toggleMode = () => {
    console.log(this.state.mode);
    if (this.state.mode === "light") {
      document.body.style.color = "white";
      document.body.style.backgroundColor = "black";
      this.setState({ mode: "dark" });
    } else {
      this.setState({ mode: "light" });
      document.body.style.color = "black";
      document.body.style.backgroundColor = "white";
    }
  };
  render() {
    return (
      <>
        <div>
          <Router>
            <NavBar toggleMode={this.toggleMode} mode={this.state.mode} />
            <LoadingBar
              height={3}
              color="#f11946"
              progress={this.state.progress}
              // onLoaderFinished={() => setProgress(0)}
            />
            <Alert></Alert>
            <Routes>
              <Route
                exact
                path="/"
                element={
                  <News
                    setProgress={this.setProgress}
                    mode={this.state.mode}
                    apiKey={this.apiKey}
                    key="general"
                    pageSize={this.pageSize}
                    country="us"
                    category="general"
                  />
                }
              ></Route>
              <Route
                exact
                path="/general"
                element={
                  <News
                    setProgress={this.setProgress}
                    mode={this.state.mode}
                    apiKey={this.apiKey}
                    key="general"
                    pageSize={this.pageSize}
                    country="us"
                    category="general"
                  />
                }
              ></Route>
              <Route
                exact
                path="/business"
                element={
                  <News
                    setProgress={this.setProgress}
                    mode={this.state.mode}
                    apiKey={this.apiKey}
                    pageSize={this.pageSize}
                    key="business"
                    country="us"
                    category="business"
                  />
                }
              ></Route>
              <Route
                exact
                path="/entertainment"
                element={
                  <News
                    setProgress={this.setProgress}
                    mode={this.state.mode}
                    apiKey={this.apiKey}
                    key="entertainment"
                    pageSize={this.pageSize}
                    country="us"
                    category="entertainment"
                  />
                }
              ></Route>
              <Route
                exact
                path="/sports"
                element={
                  <News
                    setProgress={this.setProgress}
                    key="sports"
                    mode={this.state.mode}
                    apiKey={this.apiKey}
                    pageSize={this.pageSize}
                    country="us"
                    category="sports"
                  />
                }
              ></Route>
              <Route
                exact
                path="/health"
                element={
                  <News
                    setProgress={this.setProgress}
                    key="health"
                    mode={this.state.mode}
                    apiKey={this.apiKey}
                    pageSize={this.pageSize}
                    country="us"
                    category="health"
                  />
                }
              ></Route>
              <Route
                exact
                path="/science"
                element={
                  <News
                    setProgress={this.setProgress}
                    key="science"
                    mode={this.state.mode}
                    apiKey={this.apiKey}
                    pageSize={this.pageSize}
                    country="us"
                    category="science"
                  />
                }
              ></Route>
            </Routes>
          </Router>
        </div>
      </>
    );
  }
}
