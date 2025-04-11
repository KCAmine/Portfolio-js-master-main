import React from "react";
import Typewriter from "typewriter-effect";
function Type() {
  return (
    <Typewriter 
      options={{
        strings : [
          "Etudiant en deuxieme année de BTS SIO ",  
          "Futur Chef de projet informatique",
          "Futur Consultant en systèmes d’information"
        ],
        autoStart: true, 
        loop: true,
        deleteSpeed: 50,
      }}
    />
  );
}

export default Type;
