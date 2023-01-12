import React, { Component } from "react";
import {
  Route,
  Routes,
  NavLink,
  HashRouter
} from "react-router-dom";
import Storage from "./Storage";
import Login from "./Login";
import './index.css';

 
 
class Main extends Component {
  render() {
    return (
      <HashRouter>
        <div>
          <ul className="fixed flex flex-col top-0 left-0 h h-screen w-16 bg-black dark:bg-gray-900 shadow-lg">
            <li><NavLink className="navLink" exact to="/">Home</NavLink></li>
            <li><NavLink className="navLink" to="/login">Login</NavLink></li>
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