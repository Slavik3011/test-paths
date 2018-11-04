import React from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";


const PathList = () => {
  return (
    <ul>
      <li className="card">
        <Link to="/5">
          <img src="https://cdn0.iconfinder.com/data/icons/pixon-1/24/arrows_extend_full_screen_fullscreen_maximize_resize_outline-512.png" alt="fullscreen"/>
          <div>
            <h3>Path title</h3>
            <p>desccription</p>
          </div>
          <p className="distance">1.75km</p>
          <span>></span>
        </Link>
      </li>
      <li className="card">
        <Link to="/5">
          <img src="https://cdn0.iconfinder.com/data/icons/pixon-1/24/arrows_extend_full_screen_fullscreen_maximize_resize_outline-512.png" alt="fullscreen"/>
          <div>
            <h3>Path title</h3>
            <p>desccription</p>
          </div>
          <p className="distance">1.75km</p>
          <span>></span>
        </Link>
      </li>
      <li className="card">
        <Link to="/5">
          <img src="https://cdn0.iconfinder.com/data/icons/pixon-1/24/arrows_extend_full_screen_fullscreen_maximize_resize_outline-512.png" alt="fullscreen"/>
          <div>
            <h3>Path title</h3>
            <p>desccription</p>
          </div>
          <p className="distance">1.75km</p>
          <span>></span>
        </Link>
      </li>
      <li className="card">
        <Link to="/5">
          <img src="https://cdn0.iconfinder.com/data/icons/pixon-1/24/arrows_extend_full_screen_fullscreen_maximize_resize_outline-512.png" alt="fullscreen"/>
          <div>
            <h3>Path title</h3>
            <p>desccription</p>
          </div>
          <p className="distance">1.75km</p>
          <span>></span>
        </Link>
      </li>
      <li className="card">
        <Link to="/5">
          <img src="https://cdn0.iconfinder.com/data/icons/pixon-1/24/arrows_extend_full_screen_fullscreen_maximize_resize_outline-512.png" alt="fullscreen"/>
          <div>
            <h3>Path title</h3>
            <p>desccription</p>
          </div>
          <p className="distance">1.75km</p>
          <span>></span>
        </Link>
      </li>


    </ul>
  );
};

export default PathList;