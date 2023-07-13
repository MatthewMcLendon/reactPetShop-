import React, { Component } from "react";

class AnimalCard extends Component {
  render() {
    return (
      <div className="card">
        <div className="card-content">
          <picture>
            <img
              src="https://www.svgrepo.com/download/24782/dog.svg"
              alt="My Dog"
            ></img>
          </picture>
          <h3>
            Name: <span className="card-pet-name">Borf</span>
          </h3>
          <p>
            Breed: <span className="card-pet-breed">Spanish Greeble</span>
          </p>
        </div>
      </div>
    );
  }
}

export default AnimalCard;

// Investigate this line of code - want to use local svg
// {require("./dog.svg")}
