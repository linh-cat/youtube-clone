import React from "react";
import "./App.css";
import Header from "./Components/Header/Header";
import Sidebar from "./Components/Sidebar/Sidebar";
import RecommendVideo from "./Components/RecommenVideo/RecomendVideo";
import SearchPage from "./Components/SearchPage/SearchPage";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Switch>
          <Route path="/search/:searchQuery">
            <div className="App__page">
              <Sidebar />
              <SearchPage />
            </div>
          </Route>
          <Route path="/">
            <div className="App__page">
              <Sidebar />
              <RecommendVideo />
            </div>
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
