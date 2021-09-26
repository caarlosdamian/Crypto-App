import React from "react";
import { Switch, Route, Link } from "react-router-dom";
import { Layout, Typography, Space } from "antd";
import { routes } from "./routes";
import { Navbar } from "./components/Features/";
import { BrowserRouter as Router } from "react-router-dom";
import "./App.css";

const App = () => {
  const routeComponents = routes.map(({ path, component }, key) => (
    <Route exact path={path} component={component} key={key} />
  ));
  return (
    <Router>
      <div className="app">
        <div className="navbar">
          <Navbar />
        </div>
        <div className="main">
          <Layout>
            <div className="routes">
              <Switch>{routeComponents}</Switch>
            </div>
          </Layout>
        </div>
        <div className="footer"></div>
      </div>
    </Router>
  );
};

export default App;
