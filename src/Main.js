import React, { Component } from "react";
import {
  Route,
  Routes,
  NavLink,
  HashRouter
} from "react-router-dom";
import Storage from "./Storage";
import Login from "./Login";

 
 
class Main extends Component {
  render() {
    return (
      <HashRouter>
        <div>
          <ul className="header">
            <li><NavLink className="NavLink" exact to="/">Home</NavLink></li>
            <li><NavLink className="NavLink" to="/login">Login</NavLink></li>
          </ul>
          <div className="content">
          <Routes> 
          <Route exact path="/" element={<Storage />} />
          <Route path="/Login" element={<Login />}/>
          </Routes>
          </div>
        </div>
        </HashRouter>
    );
  }
}
 
export default Main;