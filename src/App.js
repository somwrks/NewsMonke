import "./App.css";
import NavBar from "./components/NavBar";
import News from "./components/News";
import React, { Component } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Alert from "./components/Alert";

export default class App extends Component {
  pageSize =21;
  state = {
    mode: "light",
  };

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
            <Alert></Alert>
            <Routes>
              <Route
                exact
                path="/general"
                element={
                  <News
                    mode={this.state.mode}
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
                    mode={this.state.mode}
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
                    mode={this.state.mode}
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
                    key="sports"
                    mode={this.state.mode}
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
                    key="health"
                    mode={this.state.mode}
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
                    key="science"
                    mode={this.state.mode}
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
