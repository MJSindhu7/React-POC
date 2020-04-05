import React, { Component } from "react";

//UI Components as Functional components rather than class components.

const Ninjas = ({ ninjas, deleteNinja }) => {
  const ninjasList = ninjas.map(ninja => {
    // Adding If condition we can replce with conditional statement too
    if (ninja.age > 1) {
      return (
        <div className="ninja" key={ninja.id}>
          <div> Name: {ninja.name}</div>
          <div> Age: {ninja.age}</div>
          <div> Belt: {ninja.belt}</div>
          <button
            onClick={() => {
              deleteNinja(ninja.id);
            }}
          >
            Delete
          </button>
        </div>
      );
    } else {
      return null;
    }
  });
  return (
    <div className="ninjasList">
      {
        /* {ninjas.map(ninja => {
        return ninja.age > 1 ? (
          <div className="ninja" key={ninja.id}>
            <div> Name: {ninja.name}</div>
            <div> Age: {ninja.age}</div>
            <div> Belt: {ninja.belt}</div>
          </div>
        ) : null;
      })} */ ninjasList
      }
    </div>
  );
};

export default Ninjas;
