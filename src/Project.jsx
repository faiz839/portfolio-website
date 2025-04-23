import React from "react";
import log from "./log.jpg";
export default function Project() {
  return (
    <>
        <h1 style={{ textAlign: "center" }}>Projects</h1>
        <div class="content d-flex justify-content-around">  
      <div className="card" style={{ width: "18rem" }}>
        <img src={log} className="card-img-top" alt="..."  style={{ borderRadius: '60%' }} />
        <div className="card-body">
          <h5 className="card-title">React Js</h5>
          <p className="card-text">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Alias,
            officia voluptatibus. Incidunt voluptates ducimus nostrum, vel
            necessitatibus eum consequatur.
          </p>
          <a href="#" className="btn btn-primary">
            View Profile
          </a>
        </div>
      </div>
      <div className="card" style={{ width: "18rem" }}>
        <img src={log} className="card-img-top" alt="..." style={{ borderRadius: '60%' }}/>
        <div className="card-body">
          <h5 className="card-title">React Js</h5>
          <p className="card-text">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Alias,
            officia voluptatibus. Incidunt voluptates ducimus nostrum, vel
            necessitatibus eum consequatur.
          </p>
          <a href="#" className="btn btn-primary">
            View Profile
          </a>
        </div>
      </div>

      <div className="card" style={{ width: "18rem" }}>
        <img src={log} className="card-img-top" alt="..." style={{ borderRadius: '60%' }}/>
        <div className="card-body">
          <h5 className="card-title">React Js</h5>
          <p className="card-text">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Alias,
            officia voluptatibus. Incidunt voluptates ducimus nostrum, vel
            necessitatibus eum consequatur.
          </p>
          <a href="#" className="btn btn-primary">
            View Profile
          </a>
        </div>
      </div>
    </div>  
    </>

  );
}
