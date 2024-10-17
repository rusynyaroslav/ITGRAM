import React from "react";
import "./Home.css";

function Home() {
  return (
    <div className="home-container">
      <div className="card home-card">
        <h5 className="text-color">John Doe</h5>
        <div className="card-image">
          <img
            src="https://images.unsplash.com/photo-1502139214982-d0ad755818d8?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt=""
          />
        </div>
        <div className="card-content">
          <i className="material-icons" style={{ color: "red" }}>
            favorite
          </i>
          <h6 className="text-color">Post Title</h6>
          <p className="text-color">Welcome to the world of Coding!</p>
          <input type="text" placeholder="Enter comment" />
        </div>
      </div>
    </div>
  );
}

export default Home;
