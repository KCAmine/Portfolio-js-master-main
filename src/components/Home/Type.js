import React from "react";
import Typewriter from "typewriter-effect";
import { useTranslation } from "react-i18next"; 

function Type() {
  const { t } = useTranslation(); 

  return (
    <Typewriter 
      options={{
        strings : [
          t('home.typewriter.dev'),
          t('home.typewriter.lead'),
          t('home.typewriter.passion'),
        ],
        autoStart: true, 
        loop: true,
        deleteSpeed: 50,
      }}
    />
  );
}

export default Type;