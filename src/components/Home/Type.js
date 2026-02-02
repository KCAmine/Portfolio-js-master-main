import React from "react";
import Typewriter from "typewriter-effect";
function Type() {
  return (
    <Typewriter 
      options={{
        strings : [
          "Junior web developer ",  
          "Futur lead developer ",
          "Passionate about code ",
        ],
        autoStart: true, 
        loop: true,
        deleteSpeed: 50,
      }}
    />
  );
}

export default Type;
