import React, { Component } from "react";
import "./kennel.css";
import AnimalCard from "./animal/animalCard";

class Kennel extends Component {
  render() {
    return (
      <div>
        <div>
          <h2>
            The Kennel Company
            <br />
            <small>We like kennels</small>
          </h2>
          <address>
            6724 Doghouse Way
            <br />
            Flumbus, GA
          </address>
        </div>
        <div>
            <AnimalCard />
            <AnimalCard />
            <AnimalCard />
        </div>
      </div>
    );
  }
}

export default Kennel;
