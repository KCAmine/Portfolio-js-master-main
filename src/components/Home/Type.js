import React from "react";
import Typewriter from "typewriter-effect";
function Type() {
  return (
    <Typewriter 
      options={{
        strings : [
          "Junior full stack developer ",  
          "Futur lead developer ",
          "Passionate about coding ",
        ],
        autoStart: true, 
        loop: true,
        deleteSpeed: 50,
      }}
    />
  );
}

export default Type;
