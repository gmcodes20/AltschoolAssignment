import React, { Component } from "react";
import NavBar from "./components/costumHooks/NavBar";
import DisplayUsers from "./components/DisplayUsers";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  useRouteError,
} from "react-router-dom";
import Tasks from "./components/Tasks";
import Search from "./components/Search";
import Lists from "./components/Lists";
import ErrorPage from "./components/ErrorPage";
import Home from "./components/Home";

class App extends Component() {
  render() {
    return (
      <Router>
        <NavBar />

        <Routes>
          <Route path="/" end element={<Home />} />
          <Route path="users" element={<DisplayUsers />} />
          <Route path="tasks" element={<Tasks />}>
            <Route path="search" element={<Search />} />
            <Route path="lists" element={<Lists />} />
          </Route>
          <Route
            path="*"
            element={<ErrorPage />}
            useRouteError={useRouteError}
          />
        </Routes>
      </Router>
    );
  }
}

export default App;
